<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let selected = 10;

  const onChange = (e) => {
    dispatch("rating-selected", e.currentTarget.value);
  };
</script>

<ul class="rating">
  {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as num}
    <li>
      <input
        type="radio"
        name="rating"
        id="num{num}"
        value={num}
        on:change={onChange}
        checked={selected === num}
      />
      <label for="num{num}">{num}</label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
  }

  .rating li {
    position: relative;
    background-color: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background-color: #ff6a95;
  }

  /* Make actual radio select invisible */
  [type="radio"] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type="radio"]:checked ~ label {
    background-color: #ff6a95;
    color: #fff;
  }
</style>
