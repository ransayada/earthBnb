<script lang="ts">
import { Bar } from 'vue-chartjs'
 
export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['0','1','2','3','4','5'],
      datasets: [
        {
          label: 'Total Rates',
          backgroundColor: ['red','red','orange','orange','green','green'],
          data: [0,1,2,1,6,3]
        }
      ]
    })
  }
}
</script>