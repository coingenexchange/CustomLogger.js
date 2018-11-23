class CustomLogger {
  constructor(title) {
    this.title = {
      body: title || "---",
      color: "#C00",
      size: "2rem"
    };

    this.content = {
      // body: "",
      color: "yellow",
      weight: "bold",
      size: "1rem"
    };
  }

  setTitleStyle({ color, size }) {
    if (color !== undefined) this.title.color = color;
    if (size !== undefined) this.title.size = size;
  }

  setContentStyle({ color, size }) {
    if (color !== undefined) this.content.color = color;
    if (size !== undefined) this.content.size = size;
  }

  // log(body = `${this.content.body}`) {
  log(body = "") {
    console.log(
      `%c${body}`,
      `color: ${this.content.color}; font-weight: ${
        this.content.weight
      }; font-size: ${this.content.size};`
    );
  }
}

export default CustomLogger;
