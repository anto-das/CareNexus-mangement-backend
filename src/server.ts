import app from "./app";

function bootstrap() {
  try {
    // Start the server
    app.listen(5000, () => {
      console.log(`Server is running on http://localhost:${5000}`);
    });
  } catch (err) {
    console.log("Failed to start server: ", err);
  }
}
bootstrap();
