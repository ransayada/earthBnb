<script lang="ts">
import { Bar } from 'vue-chartjs'
 
export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['1','2','3','4','5'],
      datasets: [
        {
          label: 'Rates',
          backgroundColor: ['crimson','tomato','crimson','darkseagreen','darkseagreen'],
          data: [1,2,1,4,3,0]
        }
      ]
    })
  }
}
</script>