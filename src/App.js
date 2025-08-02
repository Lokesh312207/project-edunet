import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [ratings, setRatings] = useState({});

    const toggleTheme = () => setDarkMode(!darkMode);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Dummy Data
    const user = { name: "Lokesh Kumar", email: "lokeshsomapalli@gmail.com" };
    const stats = { enrolled: 5, completed: 2, pending: 3 };
    const courses = [
        { id: 1, title: "React Basics", subject: "Web Development", progress: 60, status: "Active" },
        { id: 2, title: "Python for Beginners", subject: "Programming", progress: 100, status: "Completed" },
        { id: 3, title: "Mathematics 101", subject: "Math", progress: 20, status: "Active" }
    ];
    const certificates = [
        { id: 1, course: "Python for Beginners", date: "2025-05-10", instructor: "John Doe", file: "/assets/certificate1.pdf" },
        { id: 2, course: "React Basics", date: "2025-06-15", instructor: "Jane Smith", file: "/assets/certificate2.pdf" }
    ];
    const assignments = [
        { id: 1, title: "React Quiz 1", status: "In Progress", due: "2025-07-30" },
        { id: 2, title: "Math Assignment", status: "Not Attempted", due: "2025-08-02" }
    ];
    const announcements = [
        { id: 1, message: "New course on Advanced React is live!", date: "2025-07-20" },
        { id: 2, message: "Submit your assignments by end of this week.", date: "2025-07-18" }
    ];
    const leaderboard = [
        { id: 1, name: "Ananya Sharma", score: 980 },
        { id: 2, name: "Rohit Verma", score: 920 },
        { id: 3, name: "Lokesh Kumar", score: 900 }
    ];

    const handleRating = (courseId, rating) => {
        setRatings({ ...ratings, [courseId]: rating });
    };

    const DashboardHome = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h3", null, "Welcome back, " + user.name + "!"),
            React.createElement("div", { className: "stats" },
                React.createElement("div", { className: "card" }, "Enrolled: " + stats.enrolled),
                React.createElement("div", { className: "card" }, "Completed: " + stats.completed),
                React.createElement("div", { className: "card" }, "Pending: " + stats.pending)
            ),
            React.createElement("h3", null, "Ongoing Courses"),
            courses.filter(c => c.status === "Active").map(c =>
                React.createElement("div", { key: c.id, className: "progress-item" },
                    React.createElement("span", null, c.title),
                    React.createElement("div", { className: "progress-bar" },
                        React.createElement("div", {
                            className: "progress",
                            style: { width: c.progress + "%" }
                        })
                    )
                )
            ),
            React.createElement("h3", null, "Upcoming Classes"),
            React.createElement("ul", null,
                React.createElement("li", null, "React Workshop - July 28, 2025"),
                React.createElement("li", null, "Python Live Q&A - July 29, 2025")
            )
        );

    const MyCourses = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "My Courses"),
            courses.map(c =>
                React.createElement("div", { key: c.id, className: "card" },
                    React.createElement("h4", null, c.title),
                    React.createElement("p", null, "Subject: " + c.subject),
                    React.createElement("p", null, "Status: " + c.status + " - " + c.progress + "% complete"),
                    c.status !== "Completed" &&
                    React.createElement("button", { className: "btn" }, "Continue Learning"),
                    React.createElement("div", { className: "rating" },
                        [1, 2, 3, 4, 5].map(star =>
                            React.createElement("span", {
                                key: star,
                                className: ratings[c.id] >= star ? "star filled" : "star",
                                onClick: () => handleRating(c.id, star)
                            }, "★")
                        )
                    )
                )
            )
        );

    const Certificates = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "My Certificates"),
            certificates.map(cert =>
                React.createElement("div", { key: cert.id, className: "card" },
                    React.createElement("h4", null, cert.course),
                    React.createElement("p", null, "Completion Date: " + cert.date),
                    React.createElement("p", null, "Instructor: " + cert.instructor),
                    React.createElement("iframe", {
                        src: cert.file,
                        title: cert.course,
                        width: "100%",
                        height: "200px",
                        style: { border: "1px solid #ccc", borderRadius: "8px", marginTop: "10px" }
                    }),
                    React.createElement("a", { href: cert.file, download: true, className: "btn" }, "Download Certificate")
                )
            )
        );

    const AssignmentsPage = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "Assignments & Quizzes"),
            assignments.map(a =>
                React.createElement("div", { key: a.id, className: "card" },
                    React.createElement("h4", null, a.title),
                    React.createElement("p", null, "Status: " + a.status),
                    React.createElement("p", null, "Due: " + a.due),
                    React.createElement("button", { className: "btn" }, "Start Quiz")
                )
            )
        );

    const AnnouncementsPage = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "Announcements"),
            announcements.map(a =>
                React.createElement("div", { key: a.id, className: "card" },
                    React.createElement("p", null, a.message),
                    React.createElement("small", null, a.date)
                )
            )
        );

    const LeaderboardPage = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "Leaderboard"),
            leaderboard.map(l =>
                React.createElement("div", { key: l.id, className: "card" },
                    React.createElement("h4", null, l.name),
                    React.createElement("p", null, "Score: " + l.score)
                )
            )
        );

    const Profile = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "Profile"),
            React.createElement("div", { className: "card" },
                React.createElement("img", {
                    src: process.env.PUBLIC_URL + "/assets/profile-placeholder.jpg",
                    alt: "Profile",
                    className: "profile-pic"
                }),
                React.createElement("p", null, "Name: " + user.name),
                React.createElement("p", null, "Email: " + user.email),
                React.createElement("button", { className: "btn" }, "Edit Profile")
            )
        );

    const Settings = () =>
        React.createElement("div", { className: "content" },
            React.createElement("h2", null, "Settings"),
            React.createElement("div", { className: "card" },
                React.createElement("h3", null, "Notification Preferences"),
                React.createElement("label", null,
                    React.createElement("input", { type: "checkbox", defaultChecked: true }), " Email Notifications"
                ),
                React.createElement("br"),
                React.createElement("label", null,
                    React.createElement("input", { type: "checkbox" }), " SMS Notifications"
                ),
                React.createElement("br"),
                React.createElement("label", null,
                    React.createElement("input", { type: "checkbox", defaultChecked: true }), " Push Notifications"
                )
            ),
            React.createElement("div", { className: "card" },
                React.createElement("h3", null, "Theme"),
                React.createElement("button", { className: "btn", onClick: toggleTheme },
                    darkMode ? "Switch to Light Mode" : "Switch to Dark Mode")
            )
        );

    return React.createElement(Router, null,
        React.createElement("div", { className: darkMode ? "app dark" : "app" },
            React.createElement("nav", { className: menuOpen ? "sidebar open" : "sidebar" },
                React.createElement("h1", null, "EduPanel"),
                React.createElement("ul", null,
                    React.createElement("li", null, React.createElement(Link, { to: "/", onClick: toggleMenu }, "Dashboard")),
                    React.createElement("li", null, React.createElement(Link, { to: "/courses", onClick: toggleMenu }, "My Courses")),
                    React.createElement("li", null, React.createElement(Link, { to: "/certificates", onClick: toggleMenu }, "Certificates")),
                    React.createElement("li", null, React.createElement(Link, { to: "/assignments", onClick: toggleMenu }, "Assignments")),
                    React.createElement("li", null, React.createElement(Link, { to: "/announcements", onClick: toggleMenu }, "Announcements")),
                    React.createElement("li", null, React.createElement(Link, { to: "/leaderboard", onClick: toggleMenu }, "Leaderboard")),
                    React.createElement("li", null, React.createElement(Link, { to: "/profile", onClick: toggleMenu }, "Profile")),
                    React.createElement("li", null, React.createElement(Link, { to: "/settings", onClick: toggleMenu }, "Settings"))
                )
            ),
            React.createElement("main", { className: "main" },
                React.createElement("div", { className: "top-nav" },
                    React.createElement("button", { className: "menu-btn", onClick: toggleMenu }, "☰"),
                    React.createElement("h2", null, "EduPanel Dashboard"),
                    React.createElement("div", { className: "nav-actions" },
                        React.createElement("span", null, user.name),
                        React.createElement("button", { className: "btn", onClick: toggleTheme }, darkMode ? "Light Mode" : "Dark Mode")
                    )
                ),
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(DashboardHome) }),
                    React.createElement(Route, { path: "/courses", element: React.createElement(MyCourses) }),
                    React.createElement(Route, { path: "/certificates", element: React.createElement(Certificates) }),
                    React.createElement(Route, { path: "/assignments", element: React.createElement(AssignmentsPage) }),
                    React.createElement(Route, { path: "/announcements", element: React.createElement(AnnouncementsPage) }),
                    React.createElement(Route, { path: "/leaderboard", element: React.createElement(LeaderboardPage) }),
                    React.createElement(Route, { path: "/profile", element: React.createElement(Profile) }),
                    React.createElement(Route, { path: "/settings", element: React.createElement(Settings) })
                )
            )
        )
    );
}

export default App;