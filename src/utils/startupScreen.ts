// src/utils/startupScreen.ts
export function displayStartupScreen() {
  const ascii = `
   ╔══════════════════════════════════════╗
   ║      NIKUNJ SONIGARA - THE SDE       ║
   ║                                      ║
   ║       USER MANAGEMENT SERVICE        ║
   ║                                      ║
   ║   🚀 Backend is UP and RUNNING!      ║
   ║                                      ║
   ║   Port: ${process.env.PORT || 8000}                         ║
   ║   Environment: ${process.env.NODE_ENV || "development"}           ║
   ║                                      ║
   ╚══════════════════════════════════════╝
    `;

  console.log("\x1b[36m%s\x1b[0m", ascii); // Cyan color

  console.table({
    "Server Status": "🟢 ONLINE",
    "API Endpoint": "/users",
    Database: "PostgreSQL Connected",
    Timestamp: new Date().toLocaleString(),
  });
}
