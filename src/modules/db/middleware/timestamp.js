const timestamp = schema => {
  schema.add({
    createAt: Date,
    updateAt: Date
  });

  schema.pre("save", function(next) {
    const now = Date.now();

    this.updateAt = now;

    if (!this.createAt) {
      this.createAt = now;
    }

    next();
  });
};

module.exports = timestamp;
