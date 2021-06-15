jQuery(document).ready(function () {

	/*jQuery(function(){
        jQuery("a[href^='#']").click(function(){
                var _href = jQuery(this).attr("href");
                jQuery("html, body").animate({scrollTop: jQuery(_href).offset().top+"px"},800);
                return false;
        });
	});*/

	jQuery('.menu-page span').on('click', function(e){
		e.preventDefault();
		jQuery('.menu-page .language').slideToggle();
	});


	/*
	jQuery('input[name="oil"]').click(function(){
		if (jQuery('input[name="oil"]').is(':checked')) {
			chek = jQuery(this).parent('.type_img').children('.type_bg');
			val = jQuery(this).val();
			data = jQuery(this).attr('data-value');
			chek.css({'opacity':'0.7'});
			jQuery('.type_img .type_bg').not(chek).css({'opacity':'0'});
			jQuery('#wood-dub').attr('src', '/wp-content/uploads/wood-dub-' + val + '.jpg');
			jQuery('input[name="wood"]').val(data);
		}
	});

	jQuery('input[name="laying"]').click(function(){
		jQuery('input[name="sort"]').removeAttr('checked');
		if (jQuery('input[name="laying"]').is(':checked')) {
			layval = jQuery(this).val();
			datalay = jQuery(this).attr('data-value');
			jQuery('#sort-1').val(layval + 1);
			jQuery('#sort-2').val(layval + 2);
			jQuery('#sort-3').val(layval + 3);
			jQuery('input[name="picture"]').val(datalay);
		}
	});		


	jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски 12 мм</p> <p>Толщина ламели 3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_1 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_2 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 15 мм</p> <p>Толщина ламели 3 мм</p> </div> <div class="str-input"> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_3 + '" data-value="15 * 120"> </label> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_4 + '" data-value="15 * 150"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 16 мм</p> <p>Толщина ламели 4 мм</p> </div> <div class="str-input"> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_5 + '" data-value="16 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_6 + '" data-value="16 * 200"> </label> <label class="str-label">220 мм <input type="radio" name="structure" value="' + php_vars.price_511 + '" data-value="16 * 220"> </label> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_611 + '" data-value="16 * 240"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 18 мм</p> <p>Толщина ламели 4 мм</p> </div> <div class="str-input"> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_7 + '" data-value="18 * 150"> </label> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_8 + '" data-value="18 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_9 + '" data-value="18 * 200"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 21 мм</p> <p>Толщина ламели 6 мм</p> </div> <div class="str-input"> <label class="str-label">280 мм <input type="radio" name="structure" value="' + php_vars.price_110 + '" data-value="21 * 280"> </label> <label class="str-label">300 мм <input type="radio" name="structure" value="' + php_vars.price_120 + '" data-value="21 * 300"> </label> </div> </div>');

	jQuery('.str-right').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">155 мм <input type="radio" name="structure" value="' + php_vars.price_10 + '" data-value="16 * 155"> </label> <label class="str-label">185 мм <input type="radio" name="structure" value="' + php_vars.price_11 + '" data-value="16 * 185"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  19 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_12 + '" data-value="19 * 240"> </label> </div> </div>');

	jQuery('.str-left-yasen').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски</p> </div> <div class="str-input"> <span class="str-label str-active-1">20 мм</span> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Длина доски</p> </div> <div class="str-input"> <span class="str-label str-active-1">900 - 1800 мм</span> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Ширина доски</p> </div> <div class="str-input"> <label class="str-label">90 мм <input class="str-check-1" type="radio" name="str-yasen" value="' + php_vars.price_67 + '" data-value="Паркетная доска 20 * 900 - 1800 * 90"> </label> <label class="str-label">115 мм <input class="str-check-1" type="radio" name="str-yasen" value="' + php_vars.price_68 + '" data-value="Паркетная доска 20 * 900 - 1800 * 115"> </label> <label class="str-label">160 мм <input class="str-check-1" type="radio" name="str-yasen" value="' + php_vars.price_69 + '" data-value="Паркетная доска 20 * 900 - 1800 * 160"> </label> </div> </div>');

	jQuery('.str-right-yasen').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски</p> </div> <div class="str-input"> <span class="str-label str-active-2">20 мм</span> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Длина доски</p> </div> <div class="str-input"> <span class="str-label str-active-2">900 - 1800 мм</span> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Ширина доски</p> </div> <div class="str-input"> <label class="str-label">90 мм <input class="str-check-2" type="radio" name="str-yasen" value="' + php_vars.price_67 + '" data-value="Вагонка 20 * 900 - 1800 * 90"> </label> <label class="str-label">115 мм <input class="str-check-2" type="radio" name="str-yasen" value="' + php_vars.price_68 + '" data-value="Вагонка 20 * 900 - 1800 * 115"> </label> <label class="str-label">160 мм <input class="str-check-2" type="radio" name="str-yasen" value="' + php_vars.price_69 + '" data-value="Вагонка 20 * 900 - 1800 * 160"> </label> </div> </div>');	
	
	jQuery('.str-input.term-left-input').html('<label class="str-label big-label">400/700/1000/1400/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_95 + '" data-value="20 * 400 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_70 + '" data-value="20 * 900 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_75 + '" data-value="20 * 900 - 2100 * 100"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_80 + '" data-value="20 * 1200 - 2400 * 100"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_85 + '" data-value="20 * 1500 - 2700 * 100"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_90 + '" data-value="20 * 1800 - 3000 * 100"></label>');



	jQuery('input[name="sort"]').click(function(){
		if (jQuery('input[name="sort"]').is(':checked')) {
		sortval = jQuery(this).val();
		datasort = jQuery(this).attr('data-value');
		jQuery('input[name="grade"]').val(datasort);
		if (sortval == 11) {
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски 12 мм</p> <p>Толщина ламели 3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_1 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_2 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 15 мм</p> <p>Толщина ламели 3 мм</p> </div> <div class="str-input"> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_3 + '" data-value="15 * 120"> </label> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_4 + '" data-value="15 * 150"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 16 мм</p> <p>Толщина ламели 4 мм</p> </div> <div class="str-input"> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_5 + '" data-value="16 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_6 + '" data-value="16 * 200"> </label> <label class="str-label">220 мм <input type="radio" name="structure" value="' + php_vars.price_511 + '" data-value="16 * 220"> </label> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_611 + '" data-value="16 * 240"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 18 мм</p> <p>Толщина ламели 4 мм</p> </div> <div class="str-input"> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_7 + '" data-value="18 * 150"> </label> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_8 + '" data-value="18 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_9 + '" data-value="18 * 200"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 21 мм</p> <p>Толщина ламели 6 мм</p> </div> <div class="str-input"> <label class="str-label">280 мм <input type="radio" name="structure" value="' + php_vars.price_110 + '" data-value="21 * 280"> </label> <label class="str-label">300 мм <input type="radio" name="structure" value="' + php_vars.price_120 + '" data-value="21 * 300"> </label> </div> </div>');
		jQuery('.str-right').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">155 мм <input type="radio" name="structure" value="' + php_vars.price_10 + '" data-value="16 * 155"> </label> <label class="str-label">185 мм <input type="radio" name="structure" value="' + php_vars.price_11 + '" data-value="16 * 185"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  19 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_12 + '" data-value="19 * 240"> </label> </div> </div>');}
		if (sortval == 12){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски 12 мм</p> <p>Толщина ламели 3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_13 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_14 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 15 мм</p> <p>Толщина ламели 3 мм</p> </div> <div class="str-input"> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_15 + '" data-value="15 * 120"> </label> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_16 + '" data-value="15 * 150"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 16 мм</p> <p>Толщина ламели 4 мм</p> </div> <div class="str-input"> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_17 + '" data-value="16 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_18 + '" data-value="16 * 200"> </label> <label class="str-label">220 мм <input type="radio" name="structure" value="' + php_vars.price_19 + '" data-value="16 * 220"> </label> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_20 + '" data-value="16 * 240"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 18 мм</p> <p>Толщина ламели 4 мм</p> </div> <div class="str-input"> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_21 + '" data-value="18 * 150"> </label> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_22 + '" data-value="18 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_23 + '" data-value="18 * 200"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски 21 мм</p> <p>Толщина ламели 6 мм</p> </div> <div class="str-input"> <label class="str-label">280 мм <input type="radio" name="structure" value="' + php_vars.price_250 + '" data-value="21 * 280"> </label> <label class="str-label">300 мм <input type="radio" name="structure" value="' + php_vars.price_260 + '" data-value="21 * 300"> </label> </div> </div>');
		jQuery('.str-right').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">155 мм <input type="radio" name="structure" value="' + php_vars.price_24 + '" data-value="16 * 155"> </label> <label class="str-label">185 мм <input type="radio" name="structure" value="' + php_vars.price_25 + '" data-value="16 * 185"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  19 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_26 + '" data-value="19 * 240"> </label> </div> </div>');}		
		if (sortval == 13){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_27 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_28 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  15 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_29 + '" data-value="15 * 120"> </label> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_30 + '" data-value="15 * 150"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_31 + '" data-value="16 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_32 + '" data-value="16 * 200"> </label> <label class="str-label">220 мм <input type="radio" name="structure" value="' + php_vars.price_33 + '" data-value="16 * 220"> </label> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_34 + '" data-value="16 * 240"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  18 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">150 мм <input type="radio" name="structure" value="' + php_vars.price_35 + '" data-value="18 * 150"> </label> <label class="str-label">180 мм <input type="radio" name="structure" value="' + php_vars.price_36 + '" data-value="18 * 180"> </label> <label class="str-label">200 мм <input type="radio" name="structure" value="' + php_vars.price_37 + '" data-value="18 * 200"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  21 мм</p> <p>Толщина ламели  6 мм</p> </div> <div class="str-input"> <label class="str-label">280 мм <input type="radio" name="structure" value="' + php_vars.price_38 + '" data-value="21 * 280"> </label> <label class="str-label">300 мм <input type="radio" name="structure" value="' + php_vars.price_39 + '" data-value="21 * 300"> </label> </div> </div>');
		jQuery('.str-right').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">155 мм <input type="radio" name="structure" value="' + php_vars.price_40 + '" data-value="16 * 155"> </label> <label class="str-label">185 мм <input type="radio" name="structure" value="' + php_vars.price_41 + '" data-value="16 * 185"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  19 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">240 мм <input type="radio" name="structure" value="' + php_vars.price_42 + '" data-value="19 * 240"> </label> </div> </div>');}
		if (sortval == 21){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_55 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_56 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_57 + '" data-value="16 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_58 + '" data-value="16 * 120"> </label> </div> </div>');
		jQuery('.str-right').html('');}		
		if (sortval == 22){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_59 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_60 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_61 + '" data-value="16 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_62 + '" data-value="16 * 120"> </label> </div> </div>');
		jQuery('.str-right').html('');}
		if (sortval == 23){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_63 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_64 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_65 + '" data-value="16 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_66 + '" data-value="16 * 120"> </label> </div> </div>');
		jQuery('.str-right').html('');}		
		if (sortval == 31){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_43 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_44 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_45 + '" data-value="16 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_46 + '" data-value="16 * 120"> </label> </div> </div>');
		jQuery('.str-right').html('');}
		if (sortval == 32){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_47 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_48 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_49 + '" data-value="16 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_50 + '" data-value="16 * 120"> </label> </div> </div>');
		jQuery('.str-right').html('');}		
		if (sortval == 33){
		jQuery('.str-left').html('<div class="fx_flex"> <div class="str-title"> <p>Толщина доски  12 мм</p> <p>Толщина ламели  3 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_51 + '" data-value="12 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_52 + '" data-value="12 * 120"> </label> </div> </div> <div class="fx_flex"> <div class="str-title"> <p>Толщина доски  16 мм</p> <p>Толщина ламели  4 мм</p> </div> <div class="str-input"> <label class="str-label">100 мм <input type="radio" name="structure" value="' + php_vars.price_53 + '" data-value="16 * 100"> </label> <label class="str-label">120 мм <input type="radio" name="structure" value="' + php_vars.price_54 + '" data-value="16 * 120"> </label> </div> </div>');
		jQuery('.str-right').html('');}
	}
	
	jQuery('input[name="structure"]').click(function(){
		if (jQuery('input[name="structure"]').is(':checked')) {
			strchek = jQuery(this).parent('.str-label');
			strval = jQuery(this).val();
			datastr = jQuery(this).attr('data-value');
			strchek.css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-label').not(strchek).css({'background':'#eee', 'color':'#333'});
			jQuery('.sum').text(strval + ' руб/м2');
			jQuery('input[name="size"]').val(datastr);
		}
	});		
	});
	
	jQuery('input[name="str-yasen"]').click(function(){
		if (jQuery('input[name="str-yasen"]').is(':checked')) {
			chekyas = jQuery(this).parent('.str-label');
			strval = jQuery(this).val();
			datastryas = jQuery(this).attr('data-value');			
			chekyas.css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-label').not(chekyas).css({'background':'#eee', 'color':'#333'});
			jQuery('.sum').text(strval + ' руб/м2');
			jQuery('input[name="size"]').val(datastryas);
		}
		if (jQuery('.str-check-1').is(':checked')) {
			jQuery('.str-active-1').css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-active-2').css({'background':'#eee', 'color':'#333'});
		}
		if (jQuery('.str-check-2').is(':checked')) {
			jQuery('.str-active-2').css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-active-1').css({'background':'#eee', 'color':'#333'});
		}		
	});	

	jQuery('input[name="term-laying"]').click(function(){
		if (jQuery('input[name="term-laying"]').is(':checked')) {
			termchek = jQuery(this).parent('.laying-box').children('.term-laying-bg');
			termdata = jQuery(this).attr('data-value');
			termchek.css({'opacity':'1'});			
			jQuery('.term-laying-bg').not(termchek).css({'opacity': '0'});			
			jQuery('input[name="picture"]').val(termdata);
		}
	});

	jQuery('.str-thickness-1').click(function(){
		if (jQuery('.str-thickness-1').is(':checked')) {
			thickchek = jQuery(this).parent('.str-label');
			jQuery('.term-width-1').css({'display':'block'});
			jQuery('.term-width-2').css({'display':'none'});
			thickchek.css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-label').not(thickchek).css({'background':'#eee', 'color':'#333'});			
			jQuery('.term-pihta').addClass('disabled').css({'background':'#eee', 'color':'#333'});
			jQuery('input[name="grade"]').val('Термоясень');
			jQuery('.str-input.term-left-input').html('<label class="str-label big-label">400/700/1000/1400/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_95 + '" data-value="20 * 400 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_70 + '" data-value="20 * 900 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_75 + '" data-value="20 * 900 - 2100 * 100"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_80 + '" data-value="20 * 1200 - 2400 * 100"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_85 + '" data-value="20 * 1500 - 2700 * 100"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_90 + '" data-value="20 * 1800 - 3000 * 100"></label>');						
		}
	});
	jQuery('.str-thickness-2').click(function(){
		if (jQuery('.str-thickness-2').is(':checked')) {
			thickchek = jQuery(this).parent('.str-label');
			jQuery('.term-width-2').css({'display':'block'});
			jQuery('.term-width-1').css({'display':'none'});
			thickchek.css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-label').not(thickchek).css({'background':'#eee', 'color':'#333'});				
			jQuery('.term-pihta').addClass('disabled').css({'background':'#eee', 'color':'#333'});
			jQuery('input[name="grade"]').val('Термоясень');
			jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900 - 3000 мм<input type="radio" name="term-yasen-20" value="' + php_vars.price_97 + '" data-value="40 * 900 - 3000 * 100 - 120"></label>');
		}
	});
	
	
	
	jQuery('input[name="width"]').click(function(){
		if (jQuery('input[name="width"]').is(':checked')) {
		widthchek = jQuery(this).parent('.str-label');	
		widthval = jQuery(this).val();
		widthchek.css({'background':'#b57d4f', 'color':'#fff'});
		jQuery('.term-width-1 .str-label, .term-width-2 .str-label').not(widthchek).css({'background':'#eee', 'color':'#333'});			
		if (widthval == 1) {
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">400/700/1000/1400/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_95 + '" data-value="20 * 400 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_70 + '" data-value="20 * 900 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_75 + '" data-value="20 * 900 - 2100 * 100"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_80 + '" data-value="20 * 1200 - 2400 * 100"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_85 + '" data-value="20 * 1500 - 2700 * 100"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_90 + '" data-value="20 * 1800 - 3000 * 100"></label>');}
		if (widthval == 2){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_71 + '" data-value="20 * 900 - 1800 * 115"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_76 + '" data-value="20 * 900 - 2100 * 115"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_81 + '" data-value="20 * 1200 - 2400 * 115"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_86 + '" data-value="20 * 1500 - 2700 * 115"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_91 + '" data-value="20 * 1800 - 3000 * 115"></label>');}		
		if (widthval == 3){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_72 + '" data-value="20 * 900 - 1800 * 135"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_77 + '" data-value="20 * 900 - 2100 * 135"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_82 + '" data-value="20 * 1200 - 2400 * 135"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_87 + '" data-value="20 * 1500 - 2700 * 135"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_92 + '" data-value="20 * 1800 - 3000 * 135"></label>');}
		if (widthval == 4){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">400/700/1000/1400/1800 мм<input type="radio" name="term-yasen-20" value="' + php_vars.price_96 + '" data-value="20 * 400 - 2100 * 155"></label>');}
		if (widthval == 5){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_73 + '" data-value="20 * 900 - 1800 * 160"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_78 + '" data-value="20 * 900 - 2100 * 160"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_83 + '" data-value="20 * 1200 - 2400 * 160"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_88 + '" data-value="20 * 1500 - 2700 * 160"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_93 + '" data-value="20 * 1800 - 3000 * 160"></label>');}		
		if (widthval == 6){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_74 + '" data-value="20 * 900 - 1800 * 180"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_79 + '" data-value="20 * 900 - 2100 * 180"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_84 + '" data-value="20 * 1200 - 2400 * 180"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_89 + '" data-value="20 * 1500 - 2700 * 180"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_94 + '" data-value="20 * 1800 - 3000 * 180"></label>');}		
		if (widthval == 7){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900 - 3000 мм<input type="radio" name="term-yasen-20" value="' + php_vars.price_97 + '" data-value="40 * 900 - 3000 * 100 - 120"></label>');}
		if (widthval == 8){
		jQuery('.str-input.term-left-input').html('<label class="str-label big-label">900 - 3000 мм<input type="radio" name="term-yasen-20" value="' + php_vars.price_98 + '" data-value="40 * 900 - 3000 * 130 - 160"></label>');}	
	}
	
	jQuery('input[name="term-yasen-20"]').click(function(){
		if (jQuery('input[name="term-yasen-20"]').is(':checked')) {
			strchek = jQuery(this).parent('.str-label');
			strval = jQuery(this).val();
			datastr = jQuery(this).attr('data-value');
			strchek.css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.term-left-input .str-label').not(strchek).css({'background':'#eee', 'color':'#333'});
			jQuery('.sum').text(strval + ' руб/м2');
			jQuery('input[name="size"]').val(datastr);
		}
	});		
	});	
	




	

	jQuery('.str-thickness-3').click(function(){
		if (jQuery('.str-thickness-3').is(':checked')) {
			thickchek = jQuery(this).parent('.str-label');
			strval = php_vars.price_pihta;
			thickchek.css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.str-label').not(thickchek).css({'background':'#eee', 'color':'#333'});				
			jQuery('.term-pihta').removeClass('disabled').css({'background':'#b57d4f', 'color':'#fff'});
			jQuery('.term-width-1').css({'display':'block'});
			jQuery('.term-width-2').css({'display':'none'});
			jQuery('input[name="grade"]').val('Термопихта');
			jQuery('input[name="size"]').val('20 * 120 * 900-4000');
			jQuery('.sum').text(strval + ' руб/м2');
			jQuery('.str-input.term-left-input').html('<label class="str-label big-label">400/700/1000/1400/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_95 + '" data-value="20 * 400 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_70 + '" data-value="20 * 900 - 1800 * 100"></label> <label class="str-label big-label">900/1200/1500/1800/2100 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_75 + '" data-value="20 * 900 - 2100 * 100"></label> <label class="str-label big-label">1200/1500/1800/2100/2400 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_80 + '" data-value="20 * 1200 - 2400 * 100"></label> <label class="str-label big-label">1500/1800/2100/2400/2700 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_85 + '" data-value="20 * 1500 - 2700 * 100"></label> <label class="str-label big-label">1800/2100/2400/2700/3000 мм <input type="radio" name="term-yasen-20" value="' + php_vars.price_90 + '" data-value="20 * 1800 - 3000 * 100"></label>');				
		}
	});

	voltChecked = (function(){
		cost = jQuery(this).val();
		total = parseInt(cost * strval);
		if (cost >= 150) {
			delivery = 0;
		}else{
			delivery = 3500;
		}	
		work = parseInt(cost * 1200);
		sum = total + work + delivery;
		total = total.toLocaleString();
		delivery = delivery.toLocaleString();
		work = work.toLocaleString();
		sum = sum.toLocaleString();
		jQuery('.total-wood').text(total + ' руб');
		jQuery('input[name="total_wood"]').val(total + ' руб');
		jQuery('.total-delivery').text(delivery + ' руб');
		jQuery('input[name="delivery"]').val(delivery + ' руб');		
		jQuery('.total-styling').text(work + ' руб');
		jQuery('input[name="styling"]').val(work + ' руб');		
		jQuery('.coast').text(sum + ' руб');
		jQuery('input[name="coast"]').val(sum + ' руб');			
	});	
	jQuery('input[name="number-435"]').keyup(voltChecked).click(voltChecked).change(voltChecked);

	jQuery('input[name="planken"]').click(function(){
		if (jQuery('input[name="planken"]').is(':checked')) {
			plval = jQuery(this).val();
			pldata = jQuery(this).attr('data-value');
			jQuery('#wood-term').attr('src', '/wp-content/uploads/wood-term-' + plval + '.jpg');
			jQuery('input[name="wood"]').val(pldata);
		}
	});	
	
	jQuery('input[type="radio"]').each(function(){
		xxx = jQuery(this).val();
		if (xxx == 0) {
		jQuery(this).parent('label').addClass('disabled');
		jQuery(this).remove();
		}
	});	
	
	jQuery('input[type="radio"]').click(function(){
		jQuery('input[type="radio"]').each(function(){
			xxx = jQuery(this).val();
			if (xxx == 0) {
			jQuery(this).parent('label').addClass('disabled');
			jQuery(this).remove();
			}
		});	
	});	*/

    //CSpilFloorsCalculator.wizard(true);
    /*jQuery(window).scroll(function(){
        CSpilFloorsCalculator.wizard();
    });*/
});

//скрипт открытия яндекс карты 
ymaps.ready(init);
function init() {
    var center = [55.941800, 37.276983];
    var myMap = new ymaps.Map('map', {
        center: center, //[55.941390, 37.375703],
        zoom: 12,
        controls:['zoomControl','routeButtonControl']		
    }, {
        searchControlProvider: 'yandex#search'
    });
    var myPlacemark = new ymaps.Placemark(center, {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
        iconContent: '',
        balloonContent: 'Химки, м. Сходня, ул. Некрасова, 2',
        hintContent: 'SPIL'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/wp-content/themes/spilfloors/images/marker.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -50]
    });
    myMap.geoObjects.add(myPlacemark);
}

var CSpilFloorsCalculator = {

    checkPrintForm : function () {


        return false;
    },

    checkStage : function () {

        let obForm = jQuery('.js_spilfloors_calculator_form');

        let _this = this;

        jQuery.ajax({
            url : '/wp-admin/admin-ajax.php',
            data : obForm.serialize()+'&action=my_action',
            type : 'POST',
            success : function (data) {


                jQuery('.js_spilfloors_calculator_result__price').val(data.PRICE + ' руб/м2');

                /*
                jQuery('.js_spilfloors_calculator_size_d').attr('disabled', 'disabled');
                jQuery('.js_spilfloors_calculator_size_w').attr('disabled', 'disabled');


                jQuery.each(data.DEPTH, function (k, v) {
                    jQuery('.js_spilfloors_calculator_size_d_'+v).removeAttr('disabled');
                });

                jQuery.each(data.WIDTH, function (k, v) {
                    jQuery('.js_spilfloors_calculator_size_w_'+v).removeAttr('disabled');
                });*/

                _this.doCalcResult();

            }
        });


    },

    doCalcResult : function () {

        let pricePerMetr = parseFloat(jQuery('.js_spilfloors_calculator_result__price').val());
        let metr = parseFloat(jQuery('.js_spilfloors_calculator_result__metr').val());

        jQuery('.js_spilfloors_calculator_result__pfloor').addClass('calculator_result_block__total__line__v--empty');
        jQuery('.js_spilfloors_calculator_result__pdelivery').addClass('calculator_result_block__total__line__v--empty');
        jQuery('.js_spilfloors_calculator_result__pwork').addClass('calculator_result_block__total__line__v--empty');


        if (!pricePerMetr) {
            return;
        }
        if (!metr) {
            return;
        }

        let pFloor = pricePerMetr * metr;
        let pDeliver = 3500;
        let pWork = 0;


        if (metr >= 150) {
            pDeliver = 0;
        }

        pWork = metr * 1200;

        let pTotal = pFloor + pDeliver + pWork;


        jQuery('.js_spilfloors_calculator_result__pfloor').text(this.numberFormat(pFloor) + ' руб.');
        jQuery('.js_spilfloors_calculator_result__pdelivery').text(this.numberFormat(pDeliver) + ' руб.');
        jQuery('.js_spilfloors_calculator_result__pwork').text(this.numberFormat(pWork) + ' руб.');
        jQuery('.js_spilfloors_calculator_result__ptotal').text(this.numberFormat(pTotal) + ' руб.');

        jQuery('.js_spilfloors_calculator_result__pfloor').removeClass('calculator_result_block__total__line__v--empty');
        jQuery('.js_spilfloors_calculator_result__pdelivery').removeClass('calculator_result_block__total__line__v--empty');
        jQuery('.js_spilfloors_calculator_result__pwork').removeClass('calculator_result_block__total__line__v--empty');


        jQuery('#js_calculator_print_pricepermetr').val(pricePerMetr);
        jQuery('#js_calculator_print_metr').val(metr);
        jQuery('#js_calculator_print_price').val(pFloor);
        jQuery('#js_calculator_print_delivery').val(pDeliver);
        jQuery('#js_calculator_print_work').val(pWork);
        jQuery('#js_calculator_print_total_price').val(pTotal);

    },

    numberFormat : function (number) {


        //return String(number).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        return parseFloat(number).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', ',');
    },

    loadFilterData : function () {



    },

    orderForm : function (obForm) {


        let addonData = '';

        addonData += jQuery('#js_calculator_result_price_pm_data').val();

        addonData += '&PRICE_PER_METR='+ jQuery('#js_calculator_print_pricepermetr').val();
        addonData += '&METR='+ jQuery('#js_calculator_print_metr').val();
        addonData += '&PRICE='+ jQuery('#js_calculator_print_price').val();
        addonData += '&DELIVERY='+ jQuery('#js_calculator_print_delivery').val();
        addonData += '&WORK='+ jQuery('#js_calculator_print_work').val();
        addonData += '&TOTAL_PRICE='+ jQuery('#js_calculator_print_total_price').val();

        let postData = obForm.serialize()+'&action=spilfloor_execform_action&'+addonData;


        jQuery.ajax({
            url : '/wp-admin/admin-ajax.php',
            data : postData,
            type : 'POST',
            success : function (data) {

                //console.log(data);

                obForm.find('input[type="text"]').removeClass('error');

                if (data.success == true) {

                    obForm.find('.calculator_result_order').remove();
                    obForm.find('.calculator_result_order__result').show();

                    try {
                        ym(64917028, 'reachGoal', 'feedback_form');
                    } catch (e) {

                    }


                } else {
                    jQuery.each(data.errors, function (k, v) {
                        obForm.find('input[name="'+v+'"]').addClass('error');
                    });
                }

            }
        });

    },

    wizardStage : 0,
    wizardWindowStage : 'close',
    wizardTimeout : null,

    wizardMoveToBlock : function(bNumber) {

        if (this.wizardStage == 4 && bNumber == 5) {

        } else if (bNumber > this.wizardStage) {
            return false;
        }

        let moveToBlock;
        if (bNumber == 1) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_color');
        } else if (bNumber == 2) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_picture');
        } else if (bNumber == 3) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_order');
        } else if (bNumber == 4) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_construct');
        } else if (bNumber == 5) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_calc_result');
        }

        if (moveToBlock) {
            jQuery("html, body").animate(
                {
                    scrollTop: (moveToBlock.offset().top - 50)+"px"
                },
                {
                    duration: 300,
            });
        }

    },


    loadWizard : function () {

        jQuery.ajax({
            url : '/wp-admin/admin-ajax.php',
            data : 'action=spilfloor_showizard_action&PAGE_TYPE='+this.initWizardData.PAGE_TYPE,
            type : 'POST',
            success : function (data) {
                jQuery('body').append(data);
                jQuery('body').addClass('spilfloor-widget-init');
            }
        });

    },

    initWizardData : null,

    wizard : function (bFirstInit, initWizardData) {

        if (jQuery('.js_spilfloors_calculator_form').length <= 0) {
            return;
        }

        if (bFirstInit) {
            this.initWizardData = initWizardData;
            this.loadWizard();
            this.wizardInitErrors();
        }


        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;


        let moveBlockList = [];
        let moveBlockDelta = -150;
        let classWasSet = false;



        if (this.initWizardData.PAGE_TYPE == 'TERMOWOOD') {
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_picture').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_construct').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_color').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_calc_result').offset().top + moveBlockDelta));
        } else {
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_color').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_picture').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_order').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_construct').offset().top + moveBlockDelta));
            moveBlockList.push((jQuery('.js_spilfloors_calculator_block_calc_result').offset().top + moveBlockDelta));
        }


        for (let i = 0; i < moveBlockList.length; i++) {
            if (scrollPos > moveBlockList[i] && scrollPos <= moveBlockList[(i+1)]) {
                this.wizardSetStepClass((i+1));
                classWasSet = true;
            }
        }

        if (classWasSet == false) {

            if (scrollPos <= moveBlockList[0]) {
                this.wizardSetStepClass(0);
            } else if (scrollPos > moveBlockList[(moveBlockList.length - 1)]) {
                this.wizardSetStepClass(moveBlockList.length)
            }

        }
    },

    wizardSelectUnset : function (obItem) {
        jQuery(obItem).removeAttr('checked').prop('checked', false);
        jQuery(obItem).change();
    },

    wizardSelectControl : function (step, inputName, value, params) {

        let obForm = jQuery('.js_spilfloors_calculator_form');

        let obRes = jQuery('.js_calc_wizard__footer__steps__step__'+step+'_res__val');

        jQuery('.js_calc_wizard__footer__steps__step__'+step+'_start').hide();
        jQuery('.js_calc_wizard__footer__steps__step__'+step+'_res').show();

        if (inputName == 'CALCULATOR_COLOR' && params) {
            jQuery('.js_calculator_result_picture__visual').css({
                'background-image' : 'url(\''+params.visual+'\')'
            });
            jQuery('.js_calculator_result_picture__pattern').attr('src', params.pattern);
        }


        let stepsNames;

        if (this.initWizardData.PAGE_TYPE === 'TERMOWOOD') {
            stepsNames = [
                'CALCULATOR_PICTURE',
                'CALCULATOR_CONSTRUCT_DEPTH',
                'CALCULATOR_CONSTRUCT_WIDTH'
            ];
        } else {
            stepsNames = [
                'CALCULATOR_PICTURE',
                'CALCULATOR_ORDER',
                'CALCULATOR_CONSTRUCT_DEPTH',
                'CALCULATOR_CONSTRUCT_WIDTH'
            ];
        }

        let bSetStep = true;

        if (inputName == 'CALCULATOR_CONSTRUCT_DEPTH' || inputName == 'CALCULATOR_CONSTRUCT_WIDTH') {

            let cCDepth = obForm.find('input[name="CALCULATOR_CONSTRUCT_DEPTH"]:checked').val();
            let cCWidth = obForm.find('input[name="CALCULATOR_CONSTRUCT_WIDTH"]:checked').val();

            value = '';

            if (cCDepth && cCWidth) {

            } else {
                bSetStep = false;
            }

            if (cCDepth) {
                value += ' '+cCDepth + 'мм';
            }
            if (cCWidth) {
                value += ' '+cCWidth + 'мм';
            }
        }

        obRes.text(value);

        this.wizardInitErrors();


        jQuery('#js_calculator_result_price_pm_data').val(obForm.serialize());


        jQuery.ajax({
            url : '/wp-admin/admin-ajax.php',
            data : obForm.serialize()+'&action=my_action&loadFilter=Y&PAGE_TYPE='+this.initWizardData.PAGE_TYPE,
            type : 'POST',
            success : function (data) {


                /*console.log(data);*/

                if (data.EMPTY) {

                    jQuery('.js_spilfloors_calculator_size_d').removeAttr('disabled');
                    jQuery('.js_spilfloors_calculator_size_w').removeAttr('disabled');
                    jQuery('.js_spilfloors_calculator_order_v').removeAttr('disabled');
                    jQuery('.js_spilfloors_calculator_picture_v').removeAttr('disabled');
                    if (data.B_WITH_COLORS) {
                        jQuery('.js_spilfloors_calculator_color_v').removeAttr('disabled');
                    }

                } else {
                    jQuery('.js_spilfloors_calculator_size_d').attr('disabled', 'disabled');
                    jQuery('.js_spilfloors_calculator_size_w').attr('disabled', 'disabled');
                    jQuery('.js_spilfloors_calculator_order_v').attr('disabled', 'disabled');
                    jQuery('.js_spilfloors_calculator_picture_v').attr('disabled', 'disabled');

                    if (data.B_WITH_COLORS) {
                        jQuery('.js_spilfloors_calculator_color_v').attr('disabled', 'disabled');
                    }

                    jQuery.each(data.ORDER, function (k, v) {
                        jQuery('.js_spilfloors_calculator_order_v_'+v).removeAttr('disabled');
                    });

                    jQuery.each(data.PICTURE, function (k, v) {
                        jQuery('.js_spilfloors_calculator_picture_v_'+v).removeAttr('disabled');
                    });

                    jQuery.each(data.DEPTH, function (k, v) {
                        jQuery('.js_spilfloors_calculator_size_d_'+v).removeAttr('disabled');
                    });

                    jQuery.each(data.WIDTH, function (k, v) {
                        jQuery('.js_spilfloors_calculator_size_w_'+v).removeAttr('disabled');
                    });


                    if (data.B_WITH_COLORS) {
                        jQuery.each(data.COLORS, function (k, v) {
                            jQuery('.js_spilfloors_calculator_color_v_'+v).removeAttr('disabled');
                        });
                    }

                }
            }
        });


        if (bSetStep) {
            //this.wizardSetStepClass(step);
        }

        let selectedBlockCount = 0;
        for (let i = 0; i < stepsNames.length; i++) {
            let stepValue = obForm.find('input[name="'+stepsNames[i]+'"]:checked').val();
            if (stepValue) {
                selectedBlockCount++;
            }
        }


        if (selectedBlockCount == stepsNames.length) {

            let _this = this;

            jQuery.ajax({
                url : '/wp-admin/admin-ajax.php',
                data : obForm.serialize()+'&action=my_action&PAGE_TYPE='+this.initWizardData.PAGE_TYPE,
                type : 'POST',
                success : function (data) {

                    //console.log(data);

                    //jQuery('.js_spilfloors_calculator_size_d').attr('disabled', 'disabled');

                    if (data.PRICE) {

                        jQuery('.js_calc_wizard__footer__total__val').text(_this.numberFormat(data.PRICE) + ' руб./м2');
                        jQuery('.js_spilfloors_calculator_result__price').val(data.PRICE);
                        jQuery('.js_spilfloors_calculator_result__price_format').text(_this.numberFormat(data.PRICE) + ' руб./м2');
                        try {
                            ym(64917028, 'reachGoal', 'wood_price');
                        } catch (e) {

                        }

                        //jQuery('.js_spilfloors_calculator_result__price').val(_this.numberFormat(data.PRICE) + ' руб./м2');

                        if (_this.initWizardData.PAGE_TYPE == 'TERMOWOOD') {
                            jQuery('.js_calc_wizard__footer__steps__step__4_start').hide();
                            jQuery('.js_calc_wizard__footer__steps__step__4_res').show();
                        } else {
                            jQuery('.js_calc_wizard__footer__steps__step__5_start').hide();
                            jQuery('.js_calc_wizard__footer__steps__step__5_res').show();
                        }


                        _this.doCalcResult();

                    }
                }
            });

        }


    },

    wizardInitErrors : function () {

        let stepsNames;

        let obForm = jQuery('.js_spilfloors_calculator_form');

        if (this.initWizardData.PAGE_TYPE === 'TERMOWOOD') {
            stepsNames = [
                'CALCULATOR_PICTURE',
                'CALCULATOR_CONSTRUCT_DEPTH',
                'CALCULATOR_CONSTRUCT_WIDTH'
            ];
        } else {
            stepsNames = [
                'CALCULATOR_PICTURE',
                'CALCULATOR_ORDER',
                'CALCULATOR_CONSTRUCT_DEPTH',
                'CALCULATOR_CONSTRUCT_WIDTH'
            ];
        }

        let settingsPointMap;

        if (this.initWizardData.PAGE_TYPE === 'TERMOWOOD') {
            settingsPointMap = {
                CALCULATOR_PICTURE : {
                    text :  'рисунок',
                    index : 1
                },
                CALCULATOR_CONSTRUCT_DEPTH : {
                    text : 'толщину',
                    index : 2
                },
                CALCULATOR_CONSTRUCT_WIDTH : {
                    text : 'ширину',
                    index : 2
                }
            };
        } else {
            settingsPointMap = {
                CALCULATOR_PICTURE : {
                    text :  'рисунок',
                    index : 2
                },
                CALCULATOR_ORDER : {
                    text : 'сортировку',
                    index : 3
                },
                CALCULATOR_CONSTRUCT_DEPTH : {
                    text : 'толщину',
                    index : 4
                },
                CALCULATOR_CONSTRUCT_WIDTH : {
                    text : 'ширину',
                    index : 4
                }
            };
        }

        let errorSelectedText = '';

        jQuery('.js_calculator_result_errors_points__holder').hide();
        jQuery('.js_spilfloors_calculator_result__metr').removeAttr('disabled');
        jQuery('.js_calculator_result_print_btn').show();


        jQuery.each(stepsNames, function (k, v) {
            let itemSettings = settingsPointMap[v];
            let value = obForm.find('input[name="'+v+'"]:checked').val();
            if (value && value.length > 0) {

            } else {
                if (errorSelectedText.length > 0) {
                    errorSelectedText += ' и';
                }
                errorSelectedText += ' <a href="#" onclick="CSpilFloorsCalculator.wizardStepNav('+itemSettings.index+'); return false;">'+ itemSettings.text+'</a>';
            }
        });

        jQuery('.js_calculator_result_errors_points__list').html(errorSelectedText);

        if (errorSelectedText.length > 0) {
            jQuery('.js_calculator_result_errors_points__holder').show();
            jQuery('.js_spilfloors_calculator_result__metr').attr('disabled', 'disabled');

            jQuery('.js_spilfloors_calculator_result__price').val(0);
            jQuery('.js_spilfloors_calculator_result__price_format').text('-');

            jQuery('.js_calculator_result_print_btn').hide();


            jQuery('.js_spilfloors_calculator_result__pfloor').text(this.numberFormat(0) + ' руб.');
            jQuery('.js_spilfloors_calculator_result__pdelivery').text(this.numberFormat(0) + ' руб.');
            jQuery('.js_spilfloors_calculator_result__pwork').text(this.numberFormat(0) + ' руб.');
            jQuery('.js_spilfloors_calculator_result__ptotal').text(this.numberFormat(0) + ' руб.');


        } else {
            this.doCalcResult();
        }

    },

    wizardStepNav : function (step) {

        let moveToBlock;


        if (this.initWizardData.PAGE_TYPE == 'TERMOWOOD') {
            if (step == 1) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_picture');
            } else if (step == 2) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_construct');
            } else if (step == 3) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_color');
            } else if (step == 4) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_calc_result');
            }
        } else {
            if (step == 1) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_color');
            } else if (step == 2) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_picture');
            } else if (step == 3) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_order');
            } else if (step == 4) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_construct');
            } else if (step == 5) {
                moveToBlock = jQuery('.js_spilfloors_calculator_block_calc_result');
            }
        }



        if (!moveToBlock) {
            return;
        }

        jQuery("html, body").animate(
            {
                scrollTop: (moveToBlock.offset().top - 50)+"px"
            },
            {
                duration: 600,
            }
        );


    },

    wizardStepsBtn : function (fastClose) {

        if (this.wizardTimeout) {
            clearTimeout(this.wizardTimeout);
        }


        this.wizardStage++;

        let _this = this;
        let moveToBlock;

        if (this.wizardStage == 1) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_color');
        } else if (this.wizardStage == 2) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_picture');
        } else if (this.wizardStage == 3) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_order');
        } else if (this.wizardStage == 4) {
            moveToBlock = jQuery('.js_spilfloors_calculator_block_construct');
        }

        let duration = 600;
        if (fastClose) {
            duration = 100;
        }


        if (fastClose) {

            _this.wizardCloseWindow();
            _this.wizardShowSmallWindow(_this.wizardStage);

        } else if (moveToBlock) {
            jQuery("html, body").animate(
                {
                    scrollTop: (moveToBlock.offset().top - 50)+"px"
                },
                {
                    duration: duration,
                    complete : function () {
                        _this.wizardCloseWindow();
                        _this.wizardShowSmallWindow(_this.wizardStage);
                    }
                });
        }
    },

    wizardSetStepClass : function (classNumber) {

        let wizardWindow = jQuery('.js_spilfloors_calculator_wizard');

        wizardWindow.removeClass('calc_wizard__step_1')
            .removeClass('calc_wizard__step_2')
            .removeClass('calc_wizard__step_3')
            .removeClass('calc_wizard__step_4')
            .removeClass('calc_wizard__step_5');

        if (classNumber == 0) {
            return;
        }

        wizardWindow.addClass('calc_wizard__step_'+classNumber);

    },

    wizardCloseWindow : function () {
        let wizardWindow = jQuery('.js_spilfloors_calculator_wizard');
        wizardWindow.removeClass('calc_wizard__stage-open');
        this.wizardWindowStage = 'close';
        this.wizardUnLockScroll();
    },

    wizardOpenWindow : function () {
        let wizardWindow = jQuery('.js_spilfloors_calculator_wizard');
        wizardWindow.addClass('calc_wizard__stage-open');
        this.wizardWindowStage = 'open';

        if (this.wizardStage > 0) {
            this.wizardLockScroll();
        }

        let _this = this;
        if (this.wizardStage > 0) {
            this.wizardTimeout = setTimeout(function () {
                _this.wizardStepsBtn(true);
            }, 3000);
        }
    },

    wizardCloseSmallWindow : function () {

        jQuery('.js_spilfloors_calculator_wizard__small').hide();

    },

    wizardShowSmallWindow : function (classNumber) {

        let wizardWindow = jQuery('.js_spilfloors_calculator_wizard__small');

        wizardWindow.removeClass('calc_wizard__step_1')
            .removeClass('calc_wizard__step_2')
            .removeClass('calc_wizard__step_3')
            .removeClass('calc_wizard__step_4');

        wizardWindow.addClass('calc_wizard__step_'+classNumber);

        jQuery('.js_spilfloors_calculator_wizard__small').show();

    },

    wizardLockScroll : function () {
        /*jQuery('html').addClass('wizard-compensate-for-scrollbar');
        jQuery('body').addClass('wizard-compensate-for-scrollbar');*/
    },

    wizardUnLockScroll : function () {
        /*jQuery('html').removeClass('wizard-compensate-for-scrollbar');
        jQuery('body').removeClass('wizard-compensate-for-scrollbar');*/
    }

};