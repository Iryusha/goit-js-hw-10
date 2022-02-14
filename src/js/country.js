const countryMinTemplate = countries => {
  const { flags, name } = countries;

  return `
	<div class="country_block">
    <div class="country_block--elements">
      <p class="country_block--name">
        <img src="${flags.svg}"
          alt="flag ${name.official}" width="35">
        ${name.official}
      </p>
    </div>
  </div>
	`;
};