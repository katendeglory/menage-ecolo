<script>
  import Container from "./../components/utils/Container.svelte";
  import get from "lodash.get";
  import config from "../stores/config";
  import AsAdmin from "../components/index/AsAdmin.svelte";
</script>

<div class="min-h-screen">
  {#if get($config, "currentUser.role") == "super-admin"}
    <Container>
      <AsAdmin />
    </Container>
  {:else}
    <div class="h-screen w-full flex items-center justify-center">
      You are not an admin
    </div>
  {/if}
</div>
