<script>
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { FeedbackStore } from "../stores";
  let feedbacks = [];

  FeedbackStore.subscribe((data) => (feedbacks = data));
</script>

<!-- Be careful! without feedback.id animation will be ruined! -->
{#each feedbacks as feedback (feedback.id)}
  <!-- on:delete-feedback => called Event forwarding -->
  <div in:scale out:fade={{ duration: 500 }}>
    <!-- We can also use transition attr instead of both in and out -->
    <FeedbackItem item={feedback} on:delete-feedback />
  </div>
{/each}
