/* global Chart */
document.addEventListener("DOMContentLoaded", () => {
    if (typeof Chart === "undefined") return;

    const skillsCtx = document.getElementById("skillsRadar");
    if (skillsCtx) {
        new Chart(skillsCtx, {
            type: "radar",
            data: {
                labels: [
                    "HTML",
                    "CSS",
                    "JS",
                    "Responsive",
                    "Accessibility",
                    "Git",
                    "Python",
                ],
                datasets: [
                    {
                        label: "Poziom (0-10)",
                        data: [9, 8, 7, 8, 5, 7, 5],
                        fill: true,
                        backgroundColor: "rgba(0,174,255,0.12)",
                        borderColor: "rgba(0,174,255,0.9)",
                        pointBackgroundColor: "rgba(255,255,255,0.9)",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 10,
                        grid: { color: "rgba(255,255,255,0.04)" },
                        angleLines: { color: "rgba(255,255,255,0.03)" },
                        pointLabels: { color: "#cbd6de" },
                        ticks: {callback: function() {return ""},
                                backdropColor: "rgba(0, 0, 0, 0)"}
                    },
                },
                plugins: { 
                    legend: { display: false } 
                },
            },
        });
    }

    const projectsCtx = document.getElementById("projectsChart");
    if (projectsCtx) {
        new Chart(projectsCtx, {
            type: "bar",
            data: {
                labels: ["Zrobione", "W trakcie", "Planowane"],
                datasets: [
                    {
                        label: "Ilość",
                        data: [1, 2, 4],
                        backgroundColor: [
                            "rgba(0,174,255,0.9)",
                            "rgba(99,102,241,0.85)",
                            "rgba(16,185,129,0.85)",
                        ],
                        borderRadius: 8,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
            },
        });
    }
});