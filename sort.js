/**
  * VendorSort.js v1.0
  * POST data is sent multi array named "vendorSortResult"
  * Validate product cost before sending
  */
var VendorSort = window.VendorSort || (function ($) {

    "use strict";

    var vendorEl = {
        parentEl   : '#vendor_sort_component',
        sortOrder  : '[data-vendor="sort_order"]',
        vendorSet  : '[name="set_vendor"]',
        vendorId   : '[name="vendor_id"]',
        vendorCode : '[name="vendor_code"]',
        prodCost   : '[name="product_cost"]'
    },
        //./ajax/update_product.php
        postURL = './inc/test.php',

        postData = [],

        submitData = function () {
            $.ajax({
                url : postURL,
                type : "POST",
                data : {vendorSortResult : postData},
                success : function () {
                    console.log('Done');
                }
            });
        },

        updateData = function () {
            postData = [];

            $.each($(vendorEl.parentEl).children(), function (index, el) {
                var order = index + 1;

                $(el).find(vendorEl.sortOrder).html(order);
                $(el).find(vendorEl.vendorSet).val(order);

                postData.push({
                    set_vendor   : order || null,
                    vendor_id    : $(el).find(vendorEl.vendorId).val() || null,
                    vendor_code  : $(el).find(vendorEl.vendorCode).val() || null,
                    product_cost : Number($(el).find(vendorEl.prodCost).val()).toFixed(2) || null
                });
            });

            postData.push({vendor_update : 1});

            setTimeout(submitData, 500);
        },

        configSort = function () {
            $(vendorEl.parentEl).sortable({
                //axis  : 'x',
                update: updateData,
                error : function () {
                    console.error("Error Log Here");
                }
            });
        },

        bindEvents = function () {
            $(vendorEl.vendorCode).on({
                change : updateData,
                keyup : updateData
            });

            $(vendorEl.prodCost).on({
                change : updateData,
                keyup : updateData
            });

            $(vendorEl.vendorId).on({
                change : updateData
            });
        },

        loadSelectOptions = function (vendorList) {
            var output = "", key;

            for (key in vendorList) {
                if (vendorList.hasOwnProperty(key)) {
                    output += '<option value="' + key + '">' + vendorList[key] + '</option>';
                }
            }

            $(vendorEl.vendorId).html(output);
        },

        init = function () {
            configSort();
            bindEvents();
        };

    return {
        init : init,
        loadSelectOptions : loadSelectOptions
    };
}(jQuery));

var vendorList = {
    585 : "Aamp of America",
    442 : "Aci",
    211 : "All Knoch Interiors",
    456 : "Test",
    123 : "new",
    1 : 'test 01',
    2 : 'test 02',
    3 : 'test 03',
    4 : 'test 04',
    5 : 'test 05',
    6 : 'test 06',
    7 : 'test 07',
    8 : 'test 08',
    9 : 'test  09',
    10 : 'test10',
    11 : 'test11',
    12 : 'test12',
    13 : 'test13',
    14 : 'test14',
    15 : 'test15',
    16 : 'test16',
    17 : 'test17',
    18 : 'test18',
    19 : 'test19',
    20 : 'test20',
    21 : 'test21',
    22 : 'test22',
    23 : 'test23',
    24 : 'test24',
    25 : 'test25',
    26 : 'test26',
    27 : 'test27',
    28 : 'test28',
    29 : 'test29',
    30 : 'test30',
    31 : 'test31',
    32 : 'test32',
    33 : 'test33',
    34 : 'test34',
    35 : 'test35',
    36 : 'test36',
    37 : 'test37',
    38 : 'test38',
    39 : 'test39',
    40 : 'test40',
    41 : 'test41',
    42 : 'test42',
    43 : 'test43',
    44 : 'test44',
    45 : 'test45',
    46 : 'test46',
    47 : 'test47',
    48 : 'test48',
    49 : 'test49',
    50 : 'test50'
};

VendorSort.init();
VendorSort.loadSelectOptions(vendorList);
