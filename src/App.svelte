<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  let feedbacks = [];

  $: count = feedbacks.length;
  $: average_rating =
    feedbacks.reduce((a, { rating }) => a + rating, 0) / feedbacks.length;

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedbacks = feedbacks.filter((item) => item.id !== itemId);
  };

  const newFeedback = (e) => {
    feedbacks = [e.detail, ...feedbacks];
  };
</script>

<main class="container">
  <!-- Passing feedbacks prop -->
  <FeedbackForm on:new-feedback={newFeedback} />
  <FeedbackStats {count} {average_rating} />
  <FeedbackList {feedbacks} on:delete-feedback={deleteFeedback} />
</main>
