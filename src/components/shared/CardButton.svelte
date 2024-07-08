<script>
  import { onMount } from "svelte";
  import config from "../../stores/config";

  let MERCHANT;
  let TOKEN_MOBILE;
  let URL_CARD;
  let CALL_BACK_URL;
  let CURRENCY;

  export let amount;
  export let reference;

  let description;

  let approve_url = `${window.location.origin}/?message=approved`;
  let cancel_url = `${window.location.origin}/?message=cancelled`;
  let decline_url = `${window.location.origin}/?message=declined`;

  onMount(() => {
    description = `${$config.currentUser._id} - ${$config.currentUser.email} - ${reference}`;

    MERCHANT = $config.settings.MERCHANT;
    TOKEN_MOBILE = $config.settings.TOKEN_MOBILE;
    URL_CARD = $config.settings.URL_CARD;
    CALL_BACK_URL = $config.settings.CALL_BACK_URL;
    CURRENCY = $config.settings.CURRENCY;
  });
</script>

<form action={URL_CARD} method="post">
  <input
    type="hidden"
    value={TOKEN_MOBILE}
    name="authorization"
    placeholder="authorization"
  />
  <input
    type="hidden"
    value={MERCHANT}
    name="merchant"
    placeholder="merchant"
  />
  <input
    type="hidden"
    value={reference}
    name="reference"
    placeholder="reference"
  />
  <input type="hidden" value={amount} name="amount" placeholder="amount" />
  <input
    type="hidden"
    value={CURRENCY}
    name="currency"
    placeholder="currency"
  />
  <input
    type="hidden"
    value={description}
    name="description"
    placeholder="description"
  />
  <input
    type="hidden"
    value={CALL_BACK_URL}
    name="callback_url"
    placeholder="callback_url"
  />
  <input
    type="hidden"
    value={approve_url}
    name="approve_url"
    placeholder="approve_url"
  />
  <input
    type="hidden"
    value={cancel_url}
    name="cancel_url"
    placeholder="cancel_url"
  />
  <input
    type="hidden"
    value={decline_url}
    name="decline_url"
    placeholder="decline_url"
  />
  <input
    type="hidden"
    value={decline_url}
    name="home_url"
    placeholder="decline_url"
  />
  <button class="btn btn-aurora !w-full" type="submit">
    Cliquez Pour Payer
    <span class="material-symbols-outlined text-3xl ml-2"> credit_card </span>
  </button>
</form>
