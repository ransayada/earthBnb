<template>
     <section class="searcher-container">
        <form class="el-form house-filter-container f-as-jsb pointer">
	<section class="filter-screen f-as-jc column fill-parent">
		<span> Start Your Search </span>
	</section>
	<div class="form-item field fill-parent j-space-e flex a-start">
		<label> Location </label>
		<div class="el-input el-input--suffix">
		<!---->
			<input type="text" autocomplete="off" placeholder="Where are you going?" class="el-input__inner">
			<!---->
			<!---->
			<!---->
			<!---->
		</div>
	</div>
	<div class="form-item field fill-parent j-space-e date-picker flex a-start">
		<label> Dates </label>
		<div class="el-date-editor el-range-editor el-input__inner date-picker el-date-editor--daterange">
			<i class="el-input__icon el-range__icon el-icon-date"></i>
			<input autocomplete="off" placeholder="Check In" name="" class="el-range-input">
			<span class="el-range-separator"></span>
			<input autocomplete="off" placeholder="Check Out" name="" class="el-range-input">
			<i class="el-input__icon el-range__close-icon"></i>
		</div>
	</div>
	<div class="form-item field flex a-start fill-parent j-space-e">
		<label class="guests-label"> Guests </label>
		<span class="fill-parent">
			<div role="tooltip" id="el-popover-9039" aria-hidden="true" class="el-popover el-popper" tabindex="0" style="width: 300px; display: none;">
			<!---->
			<label class="f-ac-jsb"> Adults 
				<div class="el-input-number">
					<span role="button" class="el-input-number__decrease is-disabled">
						<i class="el-icon-minus"></i>
					</span>
					<span role="button" class="el-input-number__increase">
						<i class="el-icon-plus"></i>
					</span>
					<div class="el-input">
						<!---->
						<input type="text" autocomplete="off" max="16" min="1" class="el-input__inner" role="spinbutton" aria-valuemax="16" aria-valuemin="1" aria-valuenow="1" aria-disabled="false">
						<!---->
						<!---->
						<!---->
						<!---->
					</div>	
				</div>
			</label>
			<br>
			<label class="f-ac-jsb"> Kids 
				<div class="el-input-number">
					<span role="button" class="el-input-number__decrease is-disabled">
						<i class="el-icon-minus"></i>
					</span>
					<span role="button" class="el-input-number__increase">
						<i class="el-icon-plus"></i>
					</span>
					<div class="el-input">
						<!---->
						<input type="text" autocomplete="off" max="16" min="0" class="el-input__inner" role="spinbutton" aria-valuemax="16" aria-valuemin="0" aria-valuenow="0" aria-disabled="false">
						<!---->
						<!---->
						<!---->
						<!---->
					</div>
				</div>
			</label>
			<br>
			<label class="f-ac-jsb"> Infants 
				<div class="el-input-number">
					<span role="button" class="el-input-number__decrease is-disabled">
						<i class="el-icon-minus"></i>
					</span>
					<span role="button" class="el-input-number__increase">
						<i class="el-icon-plus"></i>
					</span>
					<div class="el-input">
						<!---->
						<input type="text" autocomplete="off" max="16" min="0" class="el-input__inner" role="spinbutton" aria-valuemax="16" aria-valuemin="0" aria-valuenow="0" aria-disabled="false">
						<!---->
						<!---->
						<!---->
						<!---->
					</div>
				</div>
			</label>
			</div>
			<span class="el-popover__reference-wrapper">
				<div class="fill-parent flex a-start column el-popover__reference" aria-describedby="el-popover-9039" tabindex="0">
					<span class="flex a-center fill-parent"> 1 Guests </span>
				</div>
			</span>
		</span>
	</div>
	<div class="form-item submit flex-centered">
		<button native-type="submit" class="flex-centered">
			<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
				<g fill="none">
					<path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
				</g>	
			</svg>
		</button>
	</div>
</form>
    </section>
</template>

<script>
export default {
  name: 'staySearcher',
  data() {
    return {}
  }
}