<script context="module">
  import axios from "axios";
  import queryString from "query-string";

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, params, fetch, session, context }) {
    let { id } = queryString.parse(window.location.search);

    console.log(`ID : ${id}`);

    if (!id) window.location = "/";

    const link = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await axios.get(link).catch((err) => console.log(err));

    if (res.data) {
      return {
        props: {
          post: await res.data,
          id: id, // the slug
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${link}`),
    };
  }
</script>

<script>
  import Container from "../components/utils/Container.svelte";

  export let post;
  export let id;
</script>

<Container>
  <div class="py-20 h-screen">
    <div class="py-5" />
    <h1 class="font-bold mb-4 uppercase text-xl">{post.title}</h1>
    <h1>{post.body}</h1>

    <div class="py-5" />
    <span>The slug is {id}</span>

    <div class="py-5" />
    <a class="btn btn-primary" href="/articles">
      <ion-icon name="arrow-undo-circle" class="mr-2 text-2xl" />
      Return to Articles
    </a>
  </div>
</Container>
