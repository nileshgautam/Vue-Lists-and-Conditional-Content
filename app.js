const app = Vue.createApp({
  data() {
    return {
      title: "Assignment 1",
      items: [],
      task: "",
      showList: true,
    };
  },
  methods: {
    addItem() {
      task = this.task.trim();
      if (task === "") {
        alert("Please enter a task.");
        return;
      }
      this.items.push(task);
      this.task = "";
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
