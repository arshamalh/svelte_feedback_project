<script>
  export let count;
  export let average_rating;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Average Rating: {average_rating}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
