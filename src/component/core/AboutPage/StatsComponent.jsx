import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

export default function StatsComponent() {
  return (
    <section>
      <div>
        <div className="flex gap-4">
          {Stats.map((item, index) => (
            <div key={index}>
              <h1>{item.count}</h1>
              <h2>{item.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
