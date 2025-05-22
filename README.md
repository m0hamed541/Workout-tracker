# 💪 Workout Tracker

A simple mobile application for logging workouts and tracking progress — inspired by apps like **Hevy**. This app helps users record exercises, sets, reps, and weights, then monitor strength gains with progress charts and muscle heatmaps.

---

## 📱 Description

Track your fitness journey, visualize muscles you've trained, and build custom routines — all within a sleek mobile interface.

---

## ✨ Features

- ✅ **Workout Logging** – Record sets, reps, and weights quickly during workouts
- 📈 **Progress Tracking** – Visualize strength progression and daily activity
- 🧠 **Custom Workouts** – Build and reuse your own routines
- 🗓️ **Heatmap Dashboard** – See workout frequency using a calendar heatmap
- 🧍 **Muscle Visualization** – Highlight muscles worked based on your logs

---

## 🖼️ Screens

- 🏠 Home
- 📊 Dashboard (Heatmap & Progress Charts)
- 🏋️ Exercises (with muscle groups & media)
- 📓 Routines (Create / Edit / Follow)

---

## 🔥 Firestore Schema Docs

Explore how the app is structured using Firebase Firestore:

| Collection            | Description |
|------------------------|-------------|
| 📘 [`EXERCISES.md`](./documentation/EXERCISES.md)       | Stores all exercise metadata including muscles and images |
| 📘 [`MUSCLE_GROUPS.md`](./documentation/MUSCLE_GROUPS.md) | Muscle group definitions and SVG mapping |
| 📘 [`USERS.md`](./documentation/USERS.md)               | User profiles and metadata |
| 📘 [`WORKOUT_LOGS.md`](./documentation/WORKOUT_LOGS.md)  | Subcollection to track user's per-exercise logs |
| 📘 [`ROUTINES.md`](./documentation/ROUTINES.md)         | Preset or custom workout templates |

---

## 📦 Dependencies

### 🔥 Heatmap
Used to render calendar-based workout frequency.
- [@ncuhomeclub/react-native-heatmap](https://www.npmjs.com/package/@ncuhomeclub/react-native-heatmap)
```bash
npm install @ncuhomeclub/react-native-heatmap
