<script>
import { Doughnut } from "vue-chartjs";


export default {
  extends: Doughnut,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ["Approved", "Pending"],
      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: ["green", "red"],
          data: [
            4,
            2,
          ],
        },
      ],
    });
  },
};
</script>

<style>
</style>