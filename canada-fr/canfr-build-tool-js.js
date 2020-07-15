// Declare i, start it at 0. i keeps track of rows and is and index on the inputs.
let i = 0;
// The rows array tracks how many rows are present and is used in the for loop in the compileCode() function as the second statement to define the condition for executing the code block
const rows = [];
// The contentID array stores the type of content you're adding for each row
const contentID = [];


// Event listener for Add Content click button
document.getElementById('add-content').addEventListener('click', function() {
    removeContentButton();
    addContent();
});

// Carters Table Generator, Compile Code button event listener
document.getElementById('btn-compile').addEventListener('click', () => {
    compileCode();
});


const compileCode = () => {
    let inputID, inputArray, arrayI;
    // add button to copy code to clipboard
    copyButton();
    // Remove the content manipulation buttons once you click compile code
    removeButtons();
    // Initialize the tableRow array, which will be what is printed into the text area as the compiled code output
    let tableRow = [];
    // Log to the console the array containing the order of columns, columnOrder is used to determine which column (1, 2, 3, or 4) we are trying to build
    console.log(contentID);

    // Loop through input rows to create fully compiled code
    for (i = 1; i <= rows.length; i++) {
        // arrayOrder is set to i - 1 since i is at 1 now and arrays start at 0, this is used to tell the if statement which array value (and corresponding column selection) we're trying to build
        arrayI = i - 1;
        switch (contentID[arrayI]) {
            case 'singleImage':
                // get values for the inputs
                src = document.getElementById('image-src-' + i).value;
                href = document.getElementById('image-href-' + i).value;
                alias = document.getElementById('image-alias-' + i).value;
                alt = document.getElementById('image-alt-' + i).value;
                height = document.getElementById('my-image-' + i).naturalHeight;
                // generate code
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">\n    <tr>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt + '"><img src="' + src + '" border="0" alt="' + alt + '" title="' + alt + '" width="636" height="' + height + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '    </tr>\n</table>\n';
            break;
            case 'twoImage':
                // get values for the inputs
                src = document.getElementById('image-src-' + i).value;
                href = document.getElementById('image-href-' + i).value;
                alias = document.getElementById('image-alias-' + i).value;
                alt = document.getElementById('image-alt-' + i).value;
                height = document.getElementById('my-image-' + i).naturalHeight;
                width = document.getElementById('my-image-' + i).naturalWidth;
                src2 = document.getElementById('image-src-' + i + '22').value;
                href2 = document.getElementById('image-href-' + i + '-2').value;
                alias2 = document.getElementById('image-alias-' + i + '-2').value;
                alt2 = document.getElementById('image-alt-' + i + '-2').value;
                height2 = document.getElementById('my-image-' + i + '22').naturalHeight;
                width2 = document.getElementById('my-image-' + i + '22').naturalWidth;
                // generate code
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">\n    <tr>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt + '"><img src="' + src + '" border="0" alt="' + alt + '" title="' + alt + '" width="' + width + '" height="' + height + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height2 + 'px;"><a href="' + href2 + '" target="_blank" alias="' + alias2 + '" title="' + alt2 + '"><img src="' + src2 + '" border="0" alt="' + alt2 + '" title="' + alt2 + '" width="' + width2 + '" height="' + height2 + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '    </tr>\n</table>\n';
            break;
            case 'threeImage':
                // get values for the inputs
                src = document.getElementById('image-src-' + i).value;
                href = document.getElementById('image-href-' + i).value;
                alias = document.getElementById('image-alias-' + i).value;
                alt = document.getElementById('image-alt-' + i).value;
                height = document.getElementById('my-image-' + i).naturalHeight;
                width = document.getElementById('my-image-' + i).naturalWidth;
                src2 = document.getElementById('image-src-' + i + '22').value;
                href2 = document.getElementById('image-href-' + i + '-2').value;
                alias2 = document.getElementById('image-alias-' + i + '-2').value;
                alt2 = document.getElementById('image-alt-' + i + '-2').value;
                height2 = document.getElementById('my-image-' + i + '22').naturalHeight;
                width2 = document.getElementById('my-image-' + i + '22').naturalWidth;
                src3 = document.getElementById('image-src-' + i + '33').value;
                href3 = document.getElementById('image-href-' + i + '-3').value;
                alias3 = document.getElementById('image-alias-' + i + '-3').value;
                alt3 = document.getElementById('image-alt-' + i + '-3').value;
                height3 = document.getElementById('my-image-' + i + '33').naturalHeight;
                width3 = document.getElementById('my-image-' + i + '33').naturalWidth;
                // generate code
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">\n    <tr>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt + '"><img src="' + src + '" border="0" alt="' + alt + '" title="' + alt + '" width="' + width + '" height="' + height + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height2 + 'px;"><a href="' + href2 + '" target="_blank" alias="' + alias2 + '" title="' + alt2 + '"><img src="' + src2 + '" border="0" alt="' + alt2 + '" title="' + alt2 + '" width="' + width2 + '" height="' + height2 + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '        <td align="left" valign="top">\n' + '            <div style="height: ' + height3 + 'px;"><a href="' + href3 + '" target="_blank" alias="' + alias3 + '" title="' + alt3 + '"><img src="' + src3 + '" border="0" alt="' + alt3 + '" title="' + alt3 + '" width="' + width3 + '" height="' + height3 + '" style="display: block; border: 0;"></a></div>\n' + '        </td>\n' + '    </tr>\n</table>\n';
            break;
            case 'couponBanner':
                // get values for the input
                href = document.getElementById('image-href-' + i).value;
                alias = document.getElementById('image-alias-' + i).value;
                couponCode = document.getElementById('coupon-code-' + i).value;
                textBackground = document.getElementById('text-background-' + i).value;
                textColor = document.getElementById('text-color-' + i).value;
                src = document.getElementById('image-1-src-' + i).value;
                alt = document.getElementById('image-1-alt-' + i).value;
                src2 = document.getElementById('image-2-src-' + i).value;
                alt2 = document.getElementById('image-2-alt-' + i).value;
                src3 = document.getElementById('image-3-src-' + i).value;
                alt3 = document.getElementById('image-3-alt-' + i).value;
                src4 = document.getElementById('image-4-src-' + i).value;
                alt4 = document.getElementById('image-4-alt-' + i).value;
                height = document.getElementById('banner-image-1-' + i).naturalHeight;
                width = document.getElementById('banner-image-1-' + i).naturalWidth;
                height2 = document.getElementById('banner-image-2-' + i).naturalHeight;
                width2 = document.getElementById('banner-image-2-' + i).naturalWidth;
                height3 = document.getElementById('banner-image-3-' + i).naturalHeight;
                width3 = document.getElementById('banner-image-3-' + i).naturalWidth;
                height4 = document.getElementById('banner-image-4-' + i).naturalHeight;
                width4 = document.getElementById('banner-image-4-' + i).naturalWidth;
                textCellWidth = (636 - width3 - width2);

                // generate code
                tableRow[i] = '\n<!-- Banner Table -->\n'+
                '<table border="0" cellspacing="0" cellpadding="0" width="636">\n'+
                '    <tr>\n'+
                '        <td align="left" valign="top">\n'+
                '            <div style="height: ' + height + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt + '"><img src="' + src + '" border="0" alt="' + alt + '" title="' + alt + '" width="' + width + '" height="' + height + '" style="display: block; border: 0;"></a></div>\n'+
                '        </td>\n'+
                '    </tr>\n'+
                '    <tr>\n'+
                '        <td align="left" valign="top">\n'+
                '            <table border="0" cellspacing="0" cellpadding="0" width="636">\n'+
                '                <tr>\n'+
                '                    <td align="left" valign="top">\n'+
                '                        <div style="height: ' + height2 + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt2 + '"><img src="' + src2 + '" border="0" alt="' + alt2 + '" title="' + alt2 + '" width="' + width2 + '" height="' + height2 + '" style="display: block; border: 0;"></a></div>\n'+
                '                    </td>\n'+
                '                    <td align="center" valign="middle" bgcolor="' + textBackground + '" width="' + textCellWidth + '" height="' + height2 + '" style="color:' + textColor + '; font:Helvetica,Arial,sans-serif; font-family:Helvetica,Arial,sans-serif; font-size:16px; font-weight:bold;">\n'+
                '                        ' + couponCode + '\n'+
                '                    </td>\n'+
                '                    <td align="left" valign="top">\n'+
                '                        <div style="height: ' + height2 + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt3 + '"><img src="' + src3 + '" border="0" alt="' + alt3 + '" title="' + alt3 + '" width="' + width3 + '" height="' + height2 + '" style="display: block; border: 0;"></a></div>\n'+
                '                    </td>\n'+
                '                </tr>\n'+
                '            </table>\n'+
                '        </td>\n'+
                '    </tr>\n'+
                '    <tr>\n'+
                '        <td align="left" valign="top">\n'+
                '            <div style="height: ' + height4 + 'px;"><a href="' + href + '" target="_blank" alias="' + alias + '" title="' + alt4 + '"><img src="' + src4 + '" border="0" alt="' + alt4 + '" title="' + alt4 + '" width="' + width4 + '" height="' + height4 + '" style="display: block; border: 0;"></a></div>\n'+
                '        </td>\n'+
                '    </tr>\n'+
                '</table>\n'+
                '<!-- /Banner Table -->\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
            break;
            case 'spacer':
                // get values for the input
                spacer = document.getElementById('spacer-' + i).value;
                // generate code
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="100%">\n    <tr>\n' + '        <td bgcolor="#ffffff" height="' + spacer + '" style="line-height:' + spacer + 'px; font-size:' + spacer + 'px;">&nbsp;</td>\n' + '    </tr>\n</table>\n\n';
            break;
            case 'shopNow':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">' + '\n    <tr>' + '\n        <td align="left" valign="top">' + '\n            <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="MAGASINER MAINTENANT"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_SHOP_NOW.gif" border="0" alt="MAGASINER MAINTENANT" title="MAGASINER MAINTENANT" height="50" width="636" style="display: block;"></a></div>' + '\n        </td>' + '\n    </tr>' + '\n</table>\n\n';
            break;
            case 'set7':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n <tr>\n      <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="BÉBÉ FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_BG.gif" border="0" alt="BÉBÉ FILLE" title="BÉBÉ FILLE" height="50" width="215" style="display: block;"></a></div>\n                   </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="TOUTE-PETITE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_TG.gif" border="0" alt="TOUTE-PETITE" title="TOUTE-PETITE" height="50" width="206" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_KG.gif" border="0" alt="FILLE" title="FILLE" height="50" width="215" style="display: block;"></a></div>\n                  </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="10" style="line-height:10px; font-size:10px;">&nbsp;</td>\n   </tr>\n   <tr>\n        <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[6] + '" target="_blank" alias="' + inputArray[7] + '" title="BÉBÉ GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_BB.gif" border="0" alt="BÉBÉ GARÇON" title="BÉBÉ GARÇON" height="50" width="215" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[8] + '" target="_blank" alias="' + inputArray[9] + '" title="TOUTE-PETITE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_TB.gif" border="0" alt="TOUTE-PETITE" title="TOUTE-PETITE" height="50" width="206" style="display: block;"></a></div>\n                 </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[10] + '" target="_blank" alias="' + inputArray[11] + '" title="GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_KB.gif" border="0" alt="GARÇON" title="GARÇON" height="50" width="215" style="display: block;"></a></div>\n                   </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="10" style="line-height:10px; font-size:10px;">&nbsp;</td>\n   </tr>\n <tr>\n      <td>\n          <div style="height: 50px;"><a href="' + inputArray[12] + '" target="_blank" alias="' + inputArray[13] + '" title="TROUVER UN MAGASIN"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_FAS.gif" border="0" alt="TROUVER UN MAGASIN" title="TROUVER UN MAGASIN" height="50" width="636" style="display: block;"></a></div>\n       </td>\n </tr>\n</table>\n\n';
            break;
            case 'set6':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n <tr>\n      <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="BÉBÉ FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_6PACK_BG.gif" border="0" alt="BÉBÉ FILLE" title="BÉBÉ FILLE" height="50" width="214" style="display: block;"></a></div>\n                   </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="TOUTE-PETITE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_6PACK_TG.gif" border="0" alt="TOUTE-PETITE" title="TOUTE-PETITE" height="50" width="206" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_6PACK_KG.gif" border="0" alt="FILLE" title="FILLE" height="50" width="216" style="display: block;"></a></div>\n                  </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="10" style="line-height:10px; font-size:10px;">&nbsp;</td>\n   </tr>\n   <tr>\n        <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[6] + '" target="_blank" alias="' + inputArray[7] + '" title="BÉBÉ GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_6PACK_BB.gif" border="0" alt="BÉBÉ GARÇON" title="BÉBÉ GARÇON" height="50" width="214" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[8] + '" target="_blank" alias="' + inputArray[9] + '" title="TOUT-PETIT"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_6PACK_TB.gif" border="0" alt="TOUT-PETIT" title="TOUT-PETIT" height="50" width="206" style="display: block;"></a></div>\n                 </td>\n                 <td align="left" valign="top">\n                        <div style="height: 50px;"><a href="' + inputArray[10] + '" target="_blank" alias="' + inputArray[11] + '" title="GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_6PACK_KB.gif" border="0" alt="GARÇON" title="GARÇON" height="50" width="216" style="display: block;"></a></div>\n                   </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n</table>\n\n';
            break;
            case 'girl3cta':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n       <td align="left" valign="top">\n             <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="BÉBÉ FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_BG.gif" border="0" alt="BÉBÉ FILLE" title="BÉBÉ FILLE" height="50" width="215" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="TOUTE-PETITE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_TG.gif" border="0" alt="TOUTE-PETITE" title="TOUTE-PETITE" height="50" width="206" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 50px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_KG.gif" border="0" alt="FILLE" title="FILLE" height="50" width="215" style="display: block;"></a></div>\n       </td>\n   </tr>\n</table>\n\n';
            break;
            case 'boy3cta':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n       <td align="left" valign="top">\n             <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="BÉBÉ GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_BB.gif" border="0" alt="BÉBÉ GARÇON" title="BÉBÉ GARÇON" height="50" width="215" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="TOUT-PETIT"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_TB.gif" border="0" alt="TOUT-PETIT" title="TOUT-PETIT" height="50" width="206" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 50px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_7PACK_KB.gif" border="0" alt="GARÇON" title="GARÇON" height="50" width="215" style="display: block;"></a></div>\n       </td>\n  </tr>\n</table>\n\n';
            break;
            case 'shop2':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Shop Girls"><img src="http://image.em.oshkosh.com/lib/fe9913727561007f77/m/52/OKB_0306_am_email_final_sg.gif" border="0" alt="Shop Girls" title="Shop Girls" height="50" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Shop Boys"><img src="http://image.em.oshkosh.com/lib/fe9913727561007f77/m/52/OKB_0306_am_email_final_sb.gif" border="0" alt="Shop Boys" title="Shop Boys" height="50" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n\n';
            break;
            case 'baby2':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="BÉBÉ FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_2PACK_BABY_BG.gif" border="0" alt="BÉBÉ FILLE" title="BÉBÉ FILLE" height="50" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="BÉBÉ GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_2PACK_BABY_BB.gif" border="0" alt="BÉBÉ GARÇON" title="BÉBÉ GARÇON" height="50" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n\n';
            break;
            case 'shop3':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Shop Girls"><img src="http://image.em.oshkosh.com/lib/fe9913727561007f77/m/52/3pack-sgs.gif" border="0" alt="Shop Girls" title="Shop Girls" height="50" width="231" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Shop Boys"><img src="http://image.em.oshkosh.com/lib/fe9913727561007f77/m/52/3pack-sbs.gif" border="0" alt="Shop Boys" title="Shop Boys" height="50" width="173" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="TROUVER UN MAGASIN"><img src="http://image.em.oshkosh.com/lib/fe9913727561007f77/m/52/3pack-fas.gif" border="0" alt="TROUVER UN MAGASIN" title="TROUVER UN MAGASIN" height="50" width="232" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n\n';
            break;
            case 'shop4':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="BÉBÉ FILLE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_4PACK_BG.gif" border="0" alt="BÉBÉ FILLE" title="BÉBÉ FILLE" height="50" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="TOUTE-PETITE"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_4PACK_TG.gif" border="0" alt="TOUTE-PETITE" title="TOUTE-PETITE" height="50" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="10" style="line-height:10px; font-size:10px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n   <table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="BÉBÉ GARÇON"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_4PACK_BB.gif" border="0" alt="BÉBÉ GARÇON" title="BÉBÉ GARÇON" height="50" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 50px;"><a href="' + inputArray[6] + '" target="_blank" alias="' + inputArray[7] + '" title="TOUT-PETIT"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_4PACK_TB.gif" border="0" alt="TOUT-PETIT" title="TOUT-PETIT" height="50" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n\n';
            break;
            case 'fas':
                inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                inputArray = inputID.split(",");
                tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">' + '\n    <tr>' + '\n        <td align="left" valign="top">' + '\n            <div style="height: 50px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="TROUVER UN MAGASIN"><img src="http://image.em.cartersoshkosh.ca/lib/fe9813727561007f76/m/37/CANFR_FAS.gif" border="0" alt="TROUVER UN MAGASIN" title="TROUVER UN MAGASIN" height="50" width="636" style="display: block;"></a></div>' + '\n        </td>' + '\n    </tr>' + '\n</table>\n\n';
            break;
        }
    }
    // join array & output code
    tableRow = tableRow.join('');
    document.getElementById('code-output').textContent = tableRow;
};

// Copy Clipboard function
function copyClipboard() {
    var copyText = document.getElementById("code-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('success-message').innerHTML = 'Code successfully copied!';
}

// Add Row function
function addContent() {
    let rowTemplate, ctaBox, contentSelect;
    i++;
    console.log(i);
    newRowID = 'new-image-' + i;
    ctaBox = false;
    //consider a switch statement here
    contentSelect = document.getElementById('content-select').value;
    switch (contentSelect) {
    case 'singleImage':
        rowTemplate = '<div id="' + newRowID + '">' + 
            '<div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;">' +
                '<div class="col-lg-6">' +
                    '<div class="row">' +
                        '<div class="col-lg-6"><h5>Single Image Row</h5></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" required onchange="handleImage(' + i + ')" id="image-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image Alt</label>' +
                                '<input type="text" placeholder="Image Alt Text" class="form-control alt-input" id="image-alt-' + i + '">' +
                            '</div>' +
                        '</div>' + 
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image Alias</label>' +
                                '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-lg-6 text-left"><div id="my-image-spot-' + i + '" style="display:table-cell;padding-left:15px;"></div></div>' + 
            '</div>' +
        '</div>';
        contentID.push(contentSelect);
    break;
    case 'twoImage':
        rowTemplate = '<div id="' + newRowID + '">' + 
            '<div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;">' +
                '<div class="col-lg-6">' +
                    '<div class="row">' +
                        '<div class="col-lg-6"><h5>Two Image Row</h5></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + i + ')" id="image-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + i + '22)" id="image-src-' + i + '22">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Alt</label>' +
                                '<input type="text" placeholder="Image Alt Text" class="form-control alt-input" id="image-alt-' + i + '">' +
                            '</div>' +
                        '</div>' + 
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Alt</label>' +
                                '<input type="text" placeholder="Image Alt Text" class="form-control alt-input" id="image-alt-' + i + '-2">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '-2">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Alias</label>' +
                                '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '">' +
                            '</div>' +
                        '</div>' + 
                        '<div class="col-lg-6">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Alias</label>' +
                                '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '-2">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-lg-6 text-left"><div id="my-image-spot-' + i + '" style="display:table-cell;padding-left:15px;"></div><div id="my-image-spot-' + i + '22" style="display:table-cell;"></div></div>' + 
            '</div>' +
        '</div>';
        contentID.push(contentSelect);
    break;
    case 'threeImage':
        rowTemplate = '<div id="' + newRowID + '">' + 
            '<div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;">' +
                '<div class="col-lg-6">' +
                    '<div class="row">' +
                        '<div class="col-lg-6"><h5>Three Image Row</h5></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + i + ')" id="image-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + i + '22)" id="image-src-' + i + '22">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 3 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="handleImage(' + i + '33)" id="image-src-' + i + '33">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Alt</label>' +
                                '<input type="text" placeholder="Image Alt Text" class="form-control alt-input" id="image-alt-' + i + '">' +
                            '</div>' +
                        '</div>' + 
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Alt</label>' +
                                '<input type="text" placeholder="Image Alt Text" class="form-control alt-input" id="image-alt-' + i + '-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 3 Alt</label>' +
                                '<input type="text" placeholder="Image Alt Text" class="form-control alt-input" id="image-alt-' + i + '-3">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 3 Href</label>' +
                                '<input type="text" placeholder="Image Href Link" class="form-control" id="image-href-' + i + '-3">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Alias</label>' +
                                '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '">' +
                            '</div>' +
                        '</div>' + 
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Alias</label>' +
                                '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '-2">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-4">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 3 Alias</label>' +
                                '<input type="text" placeholder="Image Alias" class="form-control" id="image-alias-' + i + '-3">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-lg-6 text-left"><div id="my-image-spot-' + i + '" style="display:table-cell;padding-left:15px;"></div><div id="my-image-spot-' + i + '22" style="display:table-cell;"></div><div id="my-image-spot-' + i + '33" style="display:table-cell;"></div></div>' + 
            '</div>' +
        '</div>';
        contentID.push(contentSelect);
    break;
    case 'couponBanner':
        rowTemplate = '<div id="' + newRowID + '">' + 
            '<div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;">' +
                '<div class="col-lg-12">' +
                    '<div class="row">' +
                        '<div class="col-lg-6"><h5>Coupon Banner 1 Wireframe</h5></div>' +
                    '</div>' +
                    '<div class="row" id="banner-wireframe-' + i + '">' +
                        '<div class="col-lg-12"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/50/Banner-wireframe-tool.gif" style="width:400px;"></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-12 text-left"><div id="my-banner-spot-' + i + '" style="display:table-cell;padding-left:15px;"></div></div>' + 
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                            '<label for="image' + i + '">Image Href</label>' +
                            '<input type="text" placeholder="Image Href" class="form-control" id="image-href-' + i + '">' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                        '<div class="form-group">' +
                            '<label for="image' + i + '">Alias Tag</label>' +
                            '<input type="text" placeholder="Alias Tag" class="form-control image-src" id="image-alias-' + i + '">' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Coupon Code</label>' +
                                '<input type="text" placeholder="Coupon Code" class="form-control alt-input" onchange="bannerImageHandler(' + i + ')" id="coupon-code-' + i + '">' +
                            '</div>' +
                        '</div>' + 
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Text BG Color</label>' +
                                '<input type="text" placeholder="Background Color" class="form-control" onchange="bannerImageHandler(' + i + ')" id="text-background-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Text Color</label>' +
                                '<input type="text" placeholder="Text Color" class="form-control" onchange="bannerImageHandler(' + i + ')" id="text-color-' + i + '">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="bannerImageHandler(' + i + ')" id="image-1-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 1 Alt</label>' +
                                '<input type="text" placeholder="Alt Text" class="form-control" id="image-1-alt-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="bannerImageHandler(' + i + ')" id="image-2-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 2 Alt</label>' +
                                '<input type="text" placeholder="Alt Text" class="form-control" id="image-2-alt-' + i + '">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 3 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="bannerImageHandler(' + i + ')" id="image-3-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 3 Alt</label>' +
                                '<input type="text" placeholder="Alt Text" class="form-control" id="image-3-alt-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 4 Src</label>' +
                                '<input type="text" placeholder="Image Source" class="form-control image-src" onchange="bannerImageHandler(' + i + ')" id="image-4-src-' + i + '">' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-lg-2">' +
                            '<div class="form-group">' +
                                '<label for="image' + i + '">Image 4 Alt</label>' +
                                '<input type="text" placeholder="Alt Text" class="form-control" id="image-4-alt-' + i + '">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
        contentID.push(contentSelect);
    break;
    case 'spacer':
        rowTemplate = '<div id="' + newRowID + '"><div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;">' + '<div class="col-lg-3 text-left">' + '<div class="form-group">' + '<label for="image' + i + '">Spacer</label>' + '<input type="text" placeholder="Integer only" class="form-control" id="spacer-' + i + '">' + '</div>' + '</div></div></div>';
        contentID.push(contentSelect);
    break;
    case 'shopNow':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-shop-now-cta.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'set7':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-set-7-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'set6':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-set-6-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'girl3cta':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-set-3-girl-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'boy3cta':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-set-3-boy-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'shop2':
        ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/okb-set-2-shop-girl-boy-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'baby2':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-set-2-shop-girl-boy-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'shop3':
        ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/okbg-shop2-fas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'shop4':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-set-4-baby-toddler-ctas.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    case 'fas':
        ctaPreview = 'http://image.em.oshkosh.com/lib/fe9913727561007f77/m/53/canfr-fas-cta.png';
        ctaBox = true;
        contentID.push(contentSelect);
        break;
    }
    if (ctaBox === true) {
        rowTemplate = '<div id="' + newRowID + '"><div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;"><div class="col-lg-6 text-left"><textarea class="col-lg-12" id="' + contentSelect + '-input-' + i + '" rows="6" placeholder="Input links and alias tags here, top left to bottom right, comma separated with no spaces: link1,alias1,link2,alias2,link3,alias3 ..."></textarea></div><div class="col-lg-6"><img src="' + ctaPreview + '" width="450" /></div></div></div>';
    }
    rows.push(i);
    console.log(rows);
    console.log(contentID);
    $('#more-images').append(rowTemplate);
}

function removeContent() {
    // Runs when the Remove Row button is clicked
    // Log i and the rows array so we can visually keep track of it in the console, and pop the last item off the end of the rows array since we're removing it visually
    console.log(i);
    rows.pop();
    contentID.pop();
    console.log(rows);
    console.log(contentID);
    // Determine which div to remove, remove it with jQuery, and decrement i
    newRowID = '#new-image-' + i;
    $(newRowID).remove();
    --i;
    // If all rows have been removed, we don't need to display the remove row button so we're removing it here
    if (i === 0) {
        document.getElementById('remove-content').innerHTML = '';
    }
}

function removeContentButton() {
    if (rows.length >= 0) {
        document.getElementById('remove-content').innerHTML = '<button class="btn btn-outline-danger" onclick="removeContent()">Remove&nbsp;Content&nbsp;&uarr;</button>';
   }
}

function removeButtons() {
    $('#content-buttons').remove();
    $('#compile-btn').remove();
    document.getElementById('content-selector').innerHTML = '<h3>&nbsp;&nbsp;Email Code:</h3>';
}

function init() {
    window.location.reload(true);
}

function copyButton() {
    document.getElementById('copy-button').innerHTML = '<button class="btn btn-success" id="btn-copy" onclick="copyClipboard()">Copy to Clipboard</button><button style="margin-left:20px;" class="btn btn-outline-dark" id="btn-init" onclick="init()">Reset</button>';
}

// passes i into p, and builds img html code to display on the page if src isn't empty
function handleImage(p) {
    let imgTemplate, src;
    let imageSource = 'image-src-' + p;
    // console.log(imageSource);
    src = document.getElementById(imageSource).value;
    if (src != "") {
        imgTemplate = '<img src="' + src + '" onload="this.width/=1.5;" id="my-image-' + p + '" />';
    } else {
        imgTemplate = '';
    }
    // console.log(imgTemplate);
    $('#my-image-spot-' + p).html(imgTemplate);
}

function bannerImageHandler(p) {
    let bannerTemplate, src, src2, src3, src4, couponCode, textColor, textBackground;
    src = document.getElementById('image-1-src-' + p).value;
    src2 = document.getElementById('image-2-src-' + p).value;
    src3 = document.getElementById('image-3-src-' + p).value;
    src4 = document.getElementById('image-4-src-' + p).value;
    couponCode = document.getElementById('coupon-code-' + p).value;
    textColor = document.getElementById('text-color-' + p).value;
    textBackground = document.getElementById('text-background-' + p).value;
    bannerTemplate = `<table border="0" cellspacing="0" cellpadding="0" width="636">
        <tr>
            <td align="left" valign="top">
                <img src="${src}" border="0" alt="" title="" width="" height="" id="banner-image-1-${p}" style="display: block; border: 0;">
            </td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <table border="0" cellspacing="0" cellpadding="0" width="636">
                    <tr>
                        <td align="left" valign="top">
                            <img src="${src2}" border="0" alt="" title="" width="" height="" id="banner-image-2-${p}" style="display: block; border: 0;">
                        </td>
                        <td align="center" valign="middle" bgcolor="#FFFFFF" width="" height="" bgcolor="${textBackground}" style="color:${textColor}; font:Helvetica,Arial,sans-serif; font-family:Helvetica,Arial,sans-serif; font-size:16px;line-height:16px; font-weight:bold;">
                            ${couponCode}
                        </td>
                        <td align="right" valign="top">
                            <img src="${src3}" border="0" alt="" title="" width="" height="" id="banner-image-3-${p}" style="display: block; border: 0;">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <img src="${src4}" border="0" alt="" title="" width="" height="" id="banner-image-4-${p}" style="display: block; border: 0;">
            </td>
        </tr>
    </table>`;
    $('#my-banner-spot-' + p).html(bannerTemplate);
    // if (src !== '' && src2 !== '' && src3 !== '' && src4 !== '') {
    //     $('#banner-wireframe-' + p).html('');
    // }
}