<script>
  export let email;
  export let tel;
  export let country;
</script>

<div
  class="!text-xs bg-white py-1 px-3 rounded-md shadow-sm border border-gray-300/10 grid grid-cols-1 gap-1"
>
  <div class="flex items-center">
    <span class="flex items-center mr-1">
      <ion-icon name="at-circle" class="text-base text-brand-primary" />
    </span>
    {email}
  </div>
  <div class="flex items-center">
    <span class="flex items-center mr-1">
      <ion-icon name="phone-portrait" class="text-base text-brand-primary" />
    </span>
    {tel}
  </div>
  <div class="flex items-center">
    <span class="flex items-center mr-1">
      <ion-icon name="location" class="text-base text-brand-primary" />
    </span>
    {country}
  </div>
</div>
