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

// Compile Code button event listener
document.getElementById('btn-compile').addEventListener('click', () => {
    compileCode();
});


// Add Row function
function addContent() {
    let rowTemplate, newRowID, contentSelect, ctaBox;
    i++;
    newRowID = 'input-section-' + i;
    ctaBox = false;
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
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/shopnowcta_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'set7':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/fullsetcta_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'set6':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/fullsetnofascta_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'girl3cta':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/girlctas_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'boy3cta':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/boyctas_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'shop2':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/shopgbctas_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'baby2':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/babygirlbabyboycta_2020.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'shop3':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/cart-shop2-fas.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
        case 'baby3':
            ctaPreview = 'http://image.em.carters.com/lib/fe9b13727561007f75/m/49/cart-baby2-fas.png';
            ctaBox = true;
            contentID.push(contentSelect);
        break;
    }
    if (ctaBox === true) {
        rowTemplate = '<div id="' + newRowID + '"><div class="row" style="padding-bottom:20px;border-bottom:1px solid #E6E6E6;"><div class="col-lg-6 text-left"><textarea class="col-lg-12" id="' + contentSelect + '-input-' + i + '" rows="6" placeholder="Input links and alias tags here, top left to bottom right, comma separated with no spaces: link1,alias1,link2,alias2,link3,alias3 ..."></textarea></div><div class="col-lg-6"><img src="' + ctaPreview + '" width="450" /></div></div></div>';
    }

    rows.push(i);
    // console.log(rows);
    // console.log(contentID);
    $('#more-images').append(rowTemplate);
}


// compile code function
const compileCode = () => {
    if (i === 0) {
        alert("Try adding some inputs first.");
    } else {
        let inputID, inputArray, src, href, alias, alt, height, src2, href2, alias2, alt2, height2, src3, href3, alias3, alt3, height3, alt4, src4, width4, height4;
        
        // add button to copy code to clipboard
        copyButton();
        // Remove the content manipulation buttons once you click compile code
        removeButtons();
        // Initialize the tableRow array, which will be what is printed into the text area as the compiled code output
        let tableRow = [];
        // Log to the console the array containing the order of columns, columnOrder is used to determine which column (1, 2, 3, or 4) we are trying to build
        // console.log(contentID);

        // Loop through input rows to create fully compiled code
        for (i = 1; i <= rows.length; i++) {
            // arrayOrder is set to i - 1 since i is at 1 now and arrays start at 0, this is used to tell the if statement which array value (and corresponding column selection) we're trying to build
            let arrayI = i - 1;
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
                case 'spacer':
                    // get values for the input
                    spacer = document.getElementById('spacer-' + i).value;
                    // generate code
                    tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="100%">\n    <tr>\n' + '        <td bgcolor="#ffffff" height="' + spacer + '" style="line-height:' + spacer + 'px; font-size:' + spacer + 'px;">&nbsp;</td>\n' + '    </tr>\n</table>\n\n';
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
                case 'shopNow':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table border="0" cellspacing="0" cellpadding="0" width="636">' + '\n    <tr>' + '\n        <td align="left" valign="top">' + '\n            <div style="height: 57px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Shop Now"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTAtest_ShopNow.gif" border="0" alt="Shop Now" title="Shop Now" height="57" width="636" style="display: block;"></a></div>' + '\n        </td>' + '\n    </tr>' + '\n</table><!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'set7':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n <tr>\n      <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="15" style="line-height:15px; font-size:15px;">&nbsp;</td>\n   </tr>\n   <tr>\n        <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[6] + '" target="_blank" alias="' + inputArray[7] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[8] + '" target="_blank" alias="' + inputArray[9] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div>\n                 </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[10] + '" target="_blank" alias="' + inputArray[11] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td>\n          <div style="height: 72px;"><a href="' + inputArray[12] + '" target="_blank" alias="' + inputArray[13] + '" title="Find A Store"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_FAS.gif" border="0" alt="Find A Store" title="Find A Store" height="72" width="636" style="display: block;"></a></div>\n       </td>\n </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'set6':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n <tr>\n      <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n <tr>\n      <td bgcolor="#ffffff" height="15" style="line-height:15px; font-size:15px;">&nbsp;</td>\n   </tr>\n   <tr>\n        <td align="left" valign="top">\n            <table cellpadding="0" cellspacing="0" border="0" width="636">\n                <tr>\n                  <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[6] + '" target="_blank" alias="' + inputArray[7] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div>\n                  </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[8] + '" target="_blank" alias="' + inputArray[9] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div>\n                 </td>\n                 <td align="left" valign="top">\n                        <div style="height: 58px;"><a href="' + inputArray[10] + '" target="_blank" alias="' + inputArray[11] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div>\n                   </td>\n             </tr>\n         </table>\n      </td>\n </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'girl3cta':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BG.gif" border="0" alt="Baby Girl" title="Baby Girl" height="58" width="233" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Toddler Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TG.gif" border="0" alt="Toddler Girl" title="Toddler Girl" height="58" width="170" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KG.gif" border="0" alt="Girl" title="Girl" height="58" width="233" style="display: block;"></a></div>\n       </td>\n   </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'boy3cta':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_BB.gif" border="0" alt="Baby Boy" title="Baby Boy" height="58" width="233" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Toddler Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_TB.gif" border="0" alt="Toddler Boy" title="Toddler Boy" height="58" width="170" style="display: block;"></a></div>\n       </td>\n       <td align="left" valign="top">\n             <div style="height: 58px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/CAR_2019_CTA_KB.gif" border="0" alt="Boy" title="Boy" height="58" width="233" style="display: block;"></a></div>\n       </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'shop2':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Shop Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_03.jpg" border="0" alt="Shop Girl" title="Shop Girl" height="59" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Shop Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/112319_CAR_PM_04.jpg" border="0" alt="Shop Boy" title="Shop Boy" height="59" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'baby2':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 57px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/102419_CAR_THU_BABY_02.gif" border="0" alt="Baby Girl" title="Baby Girl" height="57" width="318" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 57px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/43/102419_CAR_THU_BABY_03.gif" border="0" alt="Baby Boy" title="Baby Boy" height="57" width="318" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'shop3':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 58px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Shop Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/New_2019_Car_SG.jpg" border="0" alt="Shop Girl" title="Shop Girl" height="58" width="233" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 58px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Shop Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/New_2019_Car_SB.jpg" border="0" alt="Shop Boy" title="Shop Boy" height="58" width="170" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 58px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="Find A Store"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/New_2019_Car_FAS.jpg" border="0" alt="Find A Store" title="Find A Store" height="58" width="233" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
                case 'baby3':
                    inputID = document.getElementById(contentID[arrayI] + '-input-' + i).value;
                    inputArray = inputID.split(",");
                    tableRow[i] = '<table cellpadding="0" cellspacing="0" border="0" width="636">\n  <tr>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + inputArray[0] + '" target="_blank" alias="' + inputArray[1] + '" title="Baby Girl"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/NewCart_2019_BG_FAS.gif" border="0" alt="Baby Girl" title="Baby Girl" height="59" width="233" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + inputArray[2] + '" target="_blank" alias="' + inputArray[3] + '" title="Baby Boy"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/NewCart_2019_BB_FAS.gif" border="0" alt="Baby Boy" title="Baby Boy" height="59" width="170" style="display: block;"></a></div>\n      </td>\n      <td align="left" valign="top">\n           <div style="height: 59px;"><a href="' + inputArray[4] + '" target="_blank" alias="' + inputArray[5] + '" title="Find A Store"><img src="http://image.em.carters.com/lib/fe9b13727561007f75/m/44/NewCart_2019_B_FAS.gif" border="0" alt="Find A Store" title="Find A Store" height="59" width="233" style="display: block;"></a></div>\n      </td>\n  </tr>\n</table>\n<!--Spacer-->\n<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td bgcolor="#ffffff" height="30" style="line-height:30px; font-size:30px;">&nbsp;</td></tr></table>\n<!--Spacer End-->\n\n';
                break;
            }
        }
        // join array & output code
        tableRow = tableRow.join('');
        document.getElementById('code-output').textContent = templateOpen + tableRow + templateClose;
    }
};

// Copy Clipboard function
function copyClipboard() {
    let copyText = document.getElementById("code-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('success-message').innerHTML = 'Code successfully copied!';
}

function removeContent() {
    // Runs when the Remove Row button is clicked
    // Log i and the rows array so we can visually keep track of it in the console, and pop the last item off the end of the rows array since we're removing it visually
    // console.log(i);
    rows.pop();
    contentID.pop();
    // console.log(rows);
    // console.log(contentID);
    // Determine which div to remove, remove it with jQuery, and decrement i
    newRowID = '#input-section-' + i;
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


const templateOpen = '%%=contentblockbyname(\"Shared Content\\EmailChecks\")=%%\n\n%%[\/*AMPSCRIPT*\/<div style=\"display:none;\">]%%\n%%[\/*SET PREHEADER*\/\nSet @PreH = \"Set Preheader here\"\n     \n\/*FS BAR SWITCH -- Set to \'FSAO\' for FSAO offer*\/\nSet @FSBAR = \"\"    \n \n\/*PLCC Banner Switch Y or N*\/\nSet @PLCCbanner = \"Y\"\n\n\/*Display Coupon Switch Y or N*\/\nSet @Show_Coupon = \"Y\"\n\n\/*Display Closest Store Banner Switch Y or N*\/\nSet @CSB = \"N\"\n    \n\/*MInk Browsed Pods switch Y or N*\/\nSet @BrowsePods = \"Y\"\n\n\/*SMS BANNER Switch*\/\nSet @SMS = \"Y\"\n\n\/*Set According to email type*\/\nSet @AMPM = \"AM\" \n\/*Set day to test such as \"Monday\" for BOPIS or \"Wednesday\" for Rewarding Moments | Leave blank to send*\/\nSet @BPRMdate = \"\"\n\/*To activate BOPIS test, set correct date above and use BOPIS Testing DE where expansion field 10 has Y populated*\/\n\/*Set @BPactivate to \"Y\" to test the Bopis banner*\/\nSet @BPactivate = \"\"\n\n]%%\n    %%[\n    \/*Set @TriBrand to \"Y\" or \"y\" to display Tribrand footer. Set to anything else to hide it*\/\n    Set @TriBrand = \"Y\"\n    \n    Set @V1 = \"<strong>FREE SHIPPING<\/strong> on $35+\"\n    Set @V2 = \"<strong>FREE SHIPPING<\/strong> on All Orders\"\n    Set @V3 = \"<strong>FREE SHIPPING<\/strong> to any Carter\'s or Oshkosh Store\"\n    \n    \/*Set @V4 to a Custom offer or blank*\/\n    Set @V4 = \"\"\n    \n    \/*Set @TribrandOffer to the offer you want*\/\n    Set @TriBrandOffer = @V1\n    \n    ]%%\n    %%[\n    var @rsMerkleJobMetaData\n    SET @CampaignID = CampaignCode\n    SET @CellID = CellCode\n    SET @OfferID = OfferCode1\n    IF _isTestSend == false THEN\n    SET @rsMerkleJobMetaData = LookupRows(\"ent.Merkle_Job_Metadata\", \"JobID\", jobid)\n    IF RowCount(@rsMerkleJobMetaData) == 0 THEN   UPSERTDE(\"ent.Merkle_Job_Metadata\",1,\"JobID\",jobid,\"EmailName\",emailname_,\"CampaignID\",@CampaignID,\"CellID\",@CellID,\"OfferID\",@OfferID,\"ExportSends\",\"false\")\n    ENDIF\n    ENDIF\n    \/* Controls whether to show regular Flat Rate Shipping or Free Shipping on orders $50+ or $75+ *\/\n    \/* To show Flat Rate Shipping use SET @ShowflatRateShipping = \'y\' *\/\n    SET @ShowFlatRateShipping = \"n\"\n    \/* To show a specific shipping offer use one of the below. This only is used when @ShowFlatRateShipping = \'n\' *\/\n    \/* For $50+ set @ShowShipBanner = \'FS50\' *\/\n    \/* For $75+ set @ShowShipBanner = \'FS75\' *\/\n    \/* For $50+ Holiday Season set @ShowShipBanner = \'FSHS50\' *\/\n    SET @ShowShipBanner = \'FSHS50\'\n    \/* Controls inclusion of Conversant tracking pixels *\/\n\/* If @DisplayConversant is set to \'y\' then a content area will be output before the closing <\/body> tag *\/\n\/* If @DisplayConversant is set to \'n\' then the content area will not be output *\/\nSet @DisplayConversant = \'y\'\n]%%\n%%[\n\/*Added for Equity bar*\/\n\/* Ampscript for all the Loyalty lookups *\/\n\/* Define Debug Variables *\/\nvar @error\nvar @ErrorMessage\nset @ErrorCount = 0\nset @ErrorMessage = \'\'\n\/* Define data extensions *\/\nvar @DeTIBCOExpirationFile\nvar @DeTIBCORewardExport\nvar @DeTIBCOSummaryExport\nset @DeTibcoExpirationFile  = \'ent.TIBCO_Expiration_File_Import_Test\'\nset @DeTibcoRewardExport = \'ent.TIBCO_Reward_Export_Import_Test\'\nset @DeTibcoSummaryExport  =  \'ent.TIBCO_Summary_Export_Import_Test\'\nset @EmailAddress = EmailAddr\n\/* Loyalty Debug Flag. Set to Y to show loyalty field info at the bottom *\/\nVar @DebugLoyalty\nset @DebugLoyalty = \'Y\'\n\/* Defines variables based on Merkle standard file layout *\/\nVAR @mIID\nVAR @mHID\nVAR @mCUSTOMER_NUM\nVAR @mCellName\nVAR @mCellCode\nVAR @mOfferCode1\nVAR @mCoupon_Code_1\nVAR @mDM_NEEDED\nVAR @mKid_First_Name\nVAR @mKid_Age\nVAR @mCoupon_Code_2\nVAR @mLoyalty_ID\nVAR @FmirstName\nVAR @mMiddleName\nVAR @mLastName\nVAR @mCampaignName\nVAR @mOfferName\nVAR @mSegmentName\nVAR @mDmNeeded\nVAR @mChildInfoNeeded\nVAR @mBrandOfEnrollment\nVAR @mKidFirstName\nVAR @mPointsIndicator\nVAR @mStoreClosest\nVAR @mEmailAddress\nVAR @mEmailText10\nVAR @mEmailText14\nVAR @mEmailText15\nVAR @mCouponCode1\n\/* Sets variables based on Merkle standard file layout *\/\nSET @mIID = [IID]\nSET @mHID = [HID]\nSET @mCUSTOMER_NUM = [CUSTOMER_NUM]\nSET @mCellName  = [CellName]\nSET @mCellCode = [CellCode]\nSET @mOfferCode1 = [OfferCode1]\nSET @mCoupon_Code_1 = [Coupon_Code_1]\nSET @mDM_NEEDED = [DM_NEEDED]\nSET @mKid_First_Name = [KID_FIRST_NAME]\nSET @mKid_Age = [Kid_Age]\nSET @mCoupon_Code_2 = [Coupon_Code_2]\nSET @mLoyalty_ID = [Loyalty_ID]\nSET @mFirstName = ProperCase([FIRST_NAME])\nSET @mMiddleName = [MIDDLE_NAME]\nSET @mLastName = ProperCase([LAST_NAME])\nSET @mCampaignName = [CampaignName]\nSET @mOfferName = [OfferName]\nSET @mSegmentName = [Segment_Name]\nSET @mDmNeeded = [DM_NEEDED]\nSET @mChildInfoNeeded = [CHILD_INFO_NEEDED]\nIF memberid == 7205420 THEN\nSET @mBrandOfEnrollment = \"CAR\"\nELSEIF memberid == 7205422 THEN\nSET @mBrandOfEnrollment = \"OKB\"\nENDIF\nSET @mKidFirstName = [KID_FIRST_NAME]\nSET @mPointsIndicator = [POINTS_INDICATOR]\nSET @mStoreClosest = [ASSIGNED_STORE]\nSET @mEmailAddress = [EMAIL_ADDRESS]\nSET @mEmailText10 = [OFFER_TEST_CODE]\nSET @mEmailText14 = [NEW_STORE_ID]\nSET @mEmailText15 = [WEST_COAST]\nSET @mCouponCode1 = [Coupon_Code_1]\n\/* Tibco Expiration File *\/\nset @rsTibcoExpirations = lookuprows(@DeTibcoExpirationFile,\'EmailAddress\',@EmailAddress)\nif rowcount(@rsTibcoExpirations) == 1 then\nset @rowTibcoExpirations = row(@rsTibcoExpirations,1)\nSET @tefLoyaltyLabShopperId = field(@rowTibcoExpirations,\'LoyaltyLabShopperId\')\nSET @tefRewardExpirationDate = field(@rowTibcoExpirations,\'RewardExpirationDate\')\nSET @tefRewardExpirationValue = field(@rowTibcoExpirations,\'RewardExpirationValue\')\nSET @tefPointsExpirationDate = field(@rowTibcoExpirations,\'PointsExpirationDate\')\nSET @tefPointsExpirationValue = field(@rowTibcoExpirations,\'PointsExpirationValue\')\nelse\nset @ErrorCount = Add(@ErrorCount,1)\nset @ErrorMessage = Concat(@ErrorMessage,\'No record found in DE TIBCO_Expiration_File.<br \/>\')\nendif\n\/* Tibco Reward Export File *\/\nset @rsTibcoRewardExports = lookuprows(@DeTibcoRewardExport,\'EmailAddress\',@EmailAddress)\nif rowcount(@rsTibcoRewardExports) == 1 then\nset @rowTibcoRewardExport = row(@rsTibcoRewardExports,1)\nSET @treLoyaltyLabShopperId = field(@rowTibcoRewardExport,\'LoyaltyLabShopperId\')\nSET @treEnrollmentDate = field(@rowTibcoRewardExport,\'EnrollmentDate\')\nSET @treCurrentPointsBalance = field(@rowTibcoRewardExport,\'CurrentPointsBalance\')\nSET @treTotalRewardsBalance = field(@rowTibcoRewardExport,\'TotalRewardsBalance\')\n\/* SET @treTotalRewardsEarnedWithMostRecentTransaction = field(@rowTibcoRewardExport,\'TotalRewardsEarnedWithMostRecentTransaction\') *\/\nSET @treRewards1ID = field(@rowTibcoRewardExport,\'Rewards1ID\')\n\/* Reward IDs should always be 20 characters long. If it is less than 20 pad it with 9s *\/\n\/* Need to count how many RewardIDs are actually populated *\/\nvar @treRewardCounter\nset @treRewardCounter = 0\n\/* Reward 01 *\/\nvar @i\nvar @zeroes\nIf length(@treRewards1ID) < 20 AND length(@treRewards1ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards1ID))\nfor @i = 1 to @zeroes do\nset @treRewards1ID = concat(\'9\',@treRewards1ID)\nnext @i\nset @treRewards1IdDisplay = format(@treRewards1ID, \'####-####-####-####-####\')\nendif\nSET @treRewards1Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards1Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards1ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 02 *\/\nSET @treRewards2ID = field(@rowTibcoRewardExport,\'Rewards2ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards2ID) < 20 AND length(@treRewards2ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards2ID))\nfor @i = 1 to @zeroes do\nset @treRewards2ID = concat(\'9\',@treRewards2ID)\nnext @i\nset @treRewards2IdDisplay = format(@treRewards2ID, \'####-####-####-####-####\')\nendif\nSET @treRewards2Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards2Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards2ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 03 *\/\nSET @treRewards3ID = field(@rowTibcoRewardExport,\'Rewards3ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards3ID) < 20 AND length(@treRewards3ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards3ID))\nfor @i = 1 to @zeroes do\nset @treRewards3ID = concat(\'9\',@treRewards3ID)\nnext @i\nset @treRewards3IdDisplay = format(@treRewards3ID, \'####-####-####-####-####\')\nendif\nSET @treRewards3Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards3Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards3ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 04 *\/\nSET @treRewards4ID = field(@rowTibcoRewardExport,\'Rewards4ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards4ID) < 20 AND length(@treRewards4ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards4ID))\nfor @i = 1 to @zeroes do\nset @treRewards4ID = concat(\'9\',@treRewards4ID)\nnext @i\nset @treRewards4IdDisplay = format(@treRewards4ID, \'####-####-####-####-####\')\nendif\nSET @treRewards4Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards4Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards4ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 05 *\/\nSET @treRewards5ID = field(@rowTibcoRewardExport,\'Rewards5ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards5ID) < 20 AND length(@treRewards5ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards5ID))\nfor @i = 1 to @zeroes do\nset @treRewards5ID = concat(\'9\',@treRewards5ID)\nnext @i\nset @treRewards5IdDisplay = format(@treRewards5ID, \'####-####-####-####-####\')\nendif\nSET @treRewards5Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards5Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards5ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 06 *\/\nSET @treRewards6ID = field(@rowTibcoRewardExport,\'Rewards6ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards6ID) < 20 AND length(@treRewards6ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards6ID))\nfor @i = 1 to @zeroes do\nset @treRewards6ID = concat(\'9\',@treRewards6ID)\nnext @i\nset @treRewards6IdDisplay = format(@treRewards6ID, \'####-####-####-####-####\')\nendif\nSET @treRewards6Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards6Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards6ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 07 *\/\nSET @treRewards7ID = field(@rowTibcoRewardExport,\'Rewards7ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards7ID) < 20 AND length(@treRewards7ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards7ID))\nfor @i = 1 to @zeroes do\nset @treRewards7ID = concat(\'9\',@treRewards7ID)\nnext @i\nset @treRewards7IdDisplay = format(@treRewards7ID, \'####-####-####-####-####\')\nendif\nSET @treRewards7Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards7Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards7ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 08 *\/\nSET @treRewards8ID = field(@rowTibcoRewardExport,\'Rewards8ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards8ID) < 20 AND length(@treRewards8ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards8ID))\nfor @i = 1 to @zeroes do\nset @treRewards8ID = concat(\'9\',@treRewards8ID)\nnext @i\nset @treRewards8IdDisplay = format(@treRewards8ID, \'####-####-####-####-####\')\nendif\nSET @treRewards8Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards8Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards8ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 09 *\/\nSET @treRewards9ID = field(@rowTibcoRewardExport,\'Rewards9ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards9ID) < 20 AND length(@treRewards9ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards9ID))\nfor @i = 1 to @zeroes do\nset @treRewards9ID = concat(\'9\',@treRewards9ID)\nnext @i\nset @treRewards9IdDisplay = format(@treRewards9ID, \'####-####-####-####-####\')\nendif\nSET @treRewards9Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards9Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards9ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\n\/* Reward 10 *\/\nSET @treRewards10ID = field(@rowTibcoRewardExport,\'Rewards10ID\')\nvar @i\nvar @zeroes\nIf length(@treRewards10ID) < 20 AND length(@treRewards10ID) > 13 then\nset @zeroes = subtract(\'20\',length(@treRewards10ID))\nfor @i = 1 to @zeroes do\nset @treRewards10ID = concat(\'9\',@treRewards10ID)\nnext @i\nset @treRewards10IdDisplay = format(@treRewards10ID, \'####-####-####-####-####\')\nendif\nSET @treRewards10Expiration = formatDate(field(@rowTibcoRewardExport,\'Rewards10Expiration\'), \"MM\/DD\/YYYY\", \"\",\"en-US\")\nif not empty(@treRewards10ID) then set @treRewardCounter = add(@treRewardCounter,1) endif\nelse\nset @ErrorCount = Add(@ErrorCount,1)\nset @ErrorMessage = Concat(@ErrorMessage,\'No record found in DE TIBCO_Reward_Export.<br \/>\')\nendif\n\/* Tibco LC Summary Email File *\/\nset @rsTibcoSummaryExports = lookuprows(@DeTibcoSummaryExport,\'EmailAddress\',@EmailAddress)\nset @countRsTibcoSummaryExports = rowcount(@rsTibcoSummaryExports)\nif @countRsTibcoSummaryExports == 1 then\nSet @rsTibcoSummaryExports1 = \"true\"\nset @rowTibcoSummaryExport = row(@rsTibcoSummaryExports,1)\nSET @tseLoyaltyLabShopperId = field(@rowTibcoSummaryExport,\'LoyaltyLabShopperId\')\nSET @tseFirstName = field(@rowTibcoSummaryExport,\'FirstName\')\nSET @tseLastName = field(@rowTibcoSummaryExport,\'LastName\')\nSET @tseFirstPurchaseDate = field(@rowTibcoSummaryExport,\'FirstPurchaseDate\')\nSET @tseLastPurchaseDate = field(@rowTibcoSummaryExport,\'LastPurchaseDate\')\nSET @tseNotificationType = field(@rowTibcoSummaryExport,\'NotificationType\')\nSET @tseEnrollmentDate = field(@rowTibcoSummaryExport,\'EnrollmentDate\')\nSET @tseCurrentPointsBalance = field(@rowTibcoSummaryExport,\'CurrentPointsBalance\')\nSET @tsePointsUntilNextReward = field(@rowTibcoSummaryExport,\'PointsUntilNextReward\')\nSET @tseSpendUntilNextReward = field(@rowTibcoSummaryExport,\'SpendUntilNextReward\')\nSET @tseTier = field(@rowTibcoSummaryExport,\'Tier\')\nSET @tseGhostLoyaltyID = field(@rowTibcoSummaryExport,\'GhostLoyaltyID\')\nSET @tsePointsEarnedToDate = field(@rowTibcoSummaryExport,\'PointsEarnedToDate\')\nSET @tseActiveOfferFlag = field(@rowTibcoSummaryExport,\'ActiveOfferFlag\')\nSET @tsePreferencesCompletedFlag = field(@rowTibcoSummaryExport,\'PreferencesCompletedFlag\')\nSET @tseProfileCompleteFlag = field(@rowTibcoSummaryExport,\'ProfileCompleteFlag\')\nSET @tsePercentProfileComplete = field(@rowTibcoSummaryExport,\'PercentProfileComplete\')\nSET @tseCustomerStatus = field(@rowTibcoSummaryExport,\'CustomerStatus\')\nSET @tseCurrentRewardBalance = field(@rowTibcoSummaryExport,\'CurrentRewardBalance\')\nSET @tseRewardsEarnedToDate = field(@rowTibcoSummaryExport,\'RewardsEarnedToDate\')\nSET @tseRewardsUsedToDate = field(@rowTibcoSummaryExport,\'RewardsUsedToDate\')\nelse\nset @ErrorCount = Add(@ErrorCount,1)\nset @ErrorMessage = Concat(@ErrorMessage,\'No record found in DE TIBCO_Summary_Export.<br \/>\')\nendif\n\/* END ampscript for loyalty lookups *\/\n\/*End Equity bar*\/\n\n\n\n\/* E SEGMENT CONDITIONAL SCRIPT - Use this script to bypass the coupon and coupon related content when they want to run no coupon for E Segment *\/\n\/*\nSET @OFFER = __AdditionalEmailAttribute2\nIF @OFFER == \'OFFER_TEST_CODE\' THEN\nSET @OFFER = AttributeValue(@OFFER)\nENDIF\nIF @OFFER == \"CAR_E\" THEN ELSE\n<!'+'-- ADD COUPON & RELATED CONTENT HERE --'+'>\nENDIF\n*\/\n\/* \/\/E SEGMENT CONDITIONAL SCRIPT *\/\n]%%\n\n%%[<\/div>]%%\n' + '<!DOCTYPE HTML PUBLIC \"-\/\/W3C\/\/DTD HTML 4.01 Transitional\/\/EN\" \"http:\/\/www.w3.org\/TR\/html4\/loose.dtd\">\n<html xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n<head>\n<!'+'--[if gte mso 9]><xml>\n   <o:OfficeDocumentSettings>\n    <o:AllowPNG\/>\n    <o:PixelsPerInch>96<\/o:PixelsPerInch>\n   <\/o:OfficeDocumentSettings>\n  <\/xml><![endif]--'+'>\n    <meta http-equiv=\"Content-Type\" content=\"text\/html\" charset=\"iso-8859-1\">\n    <meta name=\"x-apple-disable-message-reformatting\">\n    <meta name=\"format-detection\" content=\"telephone=no\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0;\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" \/>\n    <title>Carter\'s<\/title>\n    <style type=\"text\/css\">\n \/*----BASE CSS----*\/\n    * {\n    padding: 0px;\n    margin: 0px;\n    }\n    html {\n    -webkit-text-size-adjust: none;\n    -webkit-font-smoothing: antialiased;\n    }\n    a {\n    outline: 0;\n    }\n    img {\n    display: block;\n    }\n    td {\n    mso-line-height-rule: exactly;\n    }\n table td {\n border-collapse: collapse;\n } \n p { margin: 1em 0;} \/*Yahoo paragraph fix*\/\n .ReadMsgBody{ width: 100%;} \/* Forces Hotmail to display emails at full width *\/\n .yshortcuts, .yshortcuts a, .yshortcuts a:link, .yshortcuts a:visited, .yshortcuts a:hover, .yshortcuts a span {\n  color: black;\n  text-decoration: none !important;\n  border-bottom: none !important;\n  background: none !important;\n } \n .ExternalClass * {line-height: 100%;}  \/* Forces Hotmail to display normal line spacing*\/\n .ExternalClass { width: 100%;} \/*Hotmail table centering fix*\/\n .ExternalClass .ecxhm { display:none; }\n .ExternalClass .ecxhm2 {\n  display: inline !important;\n  font-size: 11px !important;\n  color:#666666 !important;\n }\n    a[x-apple-data-detectors] {\n    color: inherit !important;\n    text-decoration: none !important;\n    font-size: inherit !important;\n    font-family: inherit !important;\n    font-weight: inherit !important;\n    line-height: inherit !important;\n    }\n    \/*Gmail number links*\/\n    .gblue a{\n    color:inherit !important;\n    text-decoration:none !important;\n    }\n    \/*Social Links*\/\n    @media (max-width: 480px) {\n    .P18 {width:18% !important;}\n    .P20 {width:20% !important;}\n    }\n \/*----MOBILE CSS----*\/\n @-ms-viewport{width:device-width}\n @media (max-width: 480px) {\n    \/* Base Media Queries *\/\n    * { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; -webkit-font-smoothing: antialiased;}    \/*Stop iproducts from auto-resizing text*\/ \n    body {min-width:100% !important;} \/*Removes iOs9 side padding*\/\n    .hide {display:none !important;}\n    .w100P {width:100% !important; height:auto !important;}\n    .posRel {position:relative !important;}\/*Absolute position Nav*\/\n    .posAbs {position:absolute !important;display:block !important;}\/*Absolute position Nav*\/\n    \/*Carter email specific queries*\/\n    \/*-----Template Styles-----*\/\n    \/*Preheader*\/\n    .PreheadLinks a { color:#1994cd; text-decoration: none;}\n  \n    \/*Blue Flat Rate Shipping bar*\/\n   %%[IF @FSBAR == \'FSAO\' THEN]%%\n    .F20H37 {font-size:24px !important;height:37px !important;}\n   %%[ELSE]%%\n    .F20H37 {font-size:20px !important;height:37px !important;}\n   %%[ENDIF]%%\n    .F11H28 {font-size:24px !important;height:37px !important;}\/*HYBRID ADJUSTED*\/\n    .BlueBar a { color:#ffffff; text-decoration: none;} \n    .ShipL {width:66% !important;padding: 5px 0px !important;}\/*HYBRID ADJUSTED*\/\n    .ShipR {width:30% !important;}\/*HYBRID ADJUSTED*\/\n   \n    \/*Header Spacing*\/\n    .H20 {height:20px !important;}\n  \n    \/*Main Nav*\/\n    .navH {height:72px !important;}\/*HYBRID ADJUSTED*\/\n    .navBG {top:0px !important;left:25px !important;width:130px !important;}\/*HYBRID ADJUSTED*\/\n    .navBB {top:50px !important;left:25px !important;width:130px !important;}\/*HYBRID ADJUSTED*\/\n    .navTG {top:0px !important;left:255px !important;width:220px !important;}\/*HYBRID ADJUSTED*\/\n    .navTB {top:50px !important;left:255px !important;width:220px !important;}\/*HYBRID ADJUSTED*\/\n    .navG {top:0px !important;right:25px !important;width:70px !important;text-align:right !important;}\/*HYBRID ADJUSTED*\/\n    .navB {top:50px !important;right:25px !important;width:70px !important;text-align:right !important;}\/*HYBRID ADJUSTED*\/\n    .NavLinks { color:#5b6770; text-decoration: none; font-size:23px !important;}\/*HYBRID ADJUSTED*\/\n  \n    \/*Footer*\/\n    .footerLink a {color:#666666 !important; text-decoration:none !important;}\n    .footerLink2 a {color:#666666 !important;}\n    .padD {padding-left:3px !important;}\n    .HW55 {height:118px !important;width:118px !important;}\n    .F24 {font-size:24px !important;padding:0px 10px !important;}\n    .F32 {font-size:32px !important;}\n    .F34 {font-size:34px !important;}\n  \n    \/*More Hybrid Styles*\/\n    .CARLogo {content:url(\"http:\/\/image.em.carters.com\/lib\/fe9b13727561007f75\/m\/21\/2017CARLogoTransMobile.jpg\"); height:121px !important;width:345px !important;margin:10px 0px 20px 0px !important;}\n    .CARLogoNew {content:url(\"http:\/\/image.em.carters.com\/lib\/fe9b13727561007f75\/m\/22\/CAR_LOGO-rgb-mobilev1.jpg\"); height:37px !important;width:170px !important;margin:10px 0px 20px 0px !important;}\n  \n \/*Coupon*\/\n    .w310 {width:310px !important;}\n    .paddingsides {padding:5px !important;}\/*Footer side padding*\/\n    .couponLogo {height:auto !important;padding:20px 0px 10px 0px !important;}\n}\n    <\/style>\n<\/head>\n<body bgcolor=\"#ffffff\" style=\"-webkit-text-size-adjust: none; -ms-text-size-adjust: none; -webkit-font-smoothing: antialiased;padding:0;\">\n<!'+'-- rptags: campaign--'+'>   \n    <!'+'--[if t]><![endif]--'+'>\n    <!'+'--[if t]><![endif]--'+'>\n    <!'+'--[if t]><![endif]--'+'>\n  ' + '  <div style=\"color:#ffffff;display:none;width: 0px; height: 0px; overflow: hidden; position: absolute; min-height: 0px; line-height: 0px; font-size: 0px;\">%%=v(@PreH)=%% &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;<\/div>\n    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" width=\"100%\" bgcolor=\"#ffffff\" >\n        <tr>\n            <td align=\"center\" valign=\"top\">\n                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" width=\"636\" bgcolor=\"#ffffff\" class=\"container\" style=\"margin:0 auto;\">\n                    <tr>\n                        <td align=\"left\" valign=\"top\">\n                            <!'+'--Prehead--'+'>\n                            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" class=\"hide\">\n                                <tr>\n                                    <td class=\"H50\" align=\"center\" valign=\"middle\" height=\"70\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:10px; color:#685c53;\"><a href=\"https:\/\/www.carters.com\" target=\"_blank\" alias=\"PREHEADER_1_TEXT_MULTI_MULTI_PREHEADERURL\" title=\"\" style=\"color:#00a9e0; text-decoration:underline;\" class=\"PreheadLinks\"><strong style=\"color:#00a9e0; text-decoration:underline;font-weight:normal;\" class=\"PreheadLinks\">%%=v(@PreH)=%%<\/strong><\/a>\n                                    <br>\n                                    <br> %%[ if _MessageContext == \"VAWP\" then else ]%%\n                                    <a href=\"%%view_email_url%%\" target=\"_blank\" alias=\"\" title=\"\" style=\"color:#00a9e0; text-decoration:underline;\" class=\"PreheadLinks\"><strong style=\"color:#00a9e0; text-decoration:underline;font-weight:normal;\" class=\"PreheadLinks\">View<\/strong><\/a> this message in your browser.\n                                    <br> %%[ endif ]%% To ensure you receive our emails, please add <a href=\"mailto:carters.email@em.carters.com\" style=\"color:#00a9e0; text-decoration:underline;\" class=\"PreheadLinks\"><strong style=\"color:#00a9e0; text-decoration:underline;font-weight:normal;\" class=\"PreheadLinks\">carters.email@em.carters.com<\/strong><\/a>&nbsp;to&nbsp;your&nbsp;address&nbsp;book.\n                                <\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Prehead End--'+'>\n                        <!'+'--Shipping Banner--'+'>\n                        %%[IF @FSBAR == \"FSAO\" THEN]%%\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" bgcolor=\"#00a9e0\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"2%\"><\/td>\n                                <!'+'--Replace this cell with the cell code from CARFSBannerCellCode.html--'+'>\n                                <td class=\"F20H37\" align=\"center\" valign=\"middle\" width=\"96%\" height=\"36\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#ffffff;font-weight:bold; vertical-align:middle;\"><a href=\"https:\/\/www.carters.com\/bopis-lp.html\" target=\"_blank\" alias=\"PREHEADER_1_TEXT_MULTI_MULTI_FREE_SHIPPING\" style=\"color:#ffffff; text-decoration:none;\" class=\"BlueBar\"><strong style=\"color:#ffffff; text-decoration:none;\" class=\"BlueBar\">Order online. Pick up today.<\/strong><\/a><\/td>\n                                <td align=\"left\" valign=\"top\" width=\"2%\"><\/td>\n                            <\/tr>\n                        <\/table>\n                        %%[ELSE]%%\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" bgcolor=\"#00a9e0\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"2%\"><\/td>\n                                <!'+'--Replace this cell with the cell code from CARFSBannerCellCode.html--'+'>\n                                <td class=\"F20H37\" align=\"left\" valign=\"middle\" width=\"48%\" height=\"36\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#ffffff;font-weight:bold; vertical-align:middle;\"><a href=\"https:\/\/www.carters.com\" target=\"_blank\" alias=\"PREHEADER_1_TEXT_MULTI_MULTI_FREE_SHIPPING\" style=\"color:#ffffff; text-decoration:none;\" class=\"BlueBar\"><strong style=\"color:#ffffff; text-decoration:none;\" class=\"BlueBar\">FREE SHIPPING ON $35+<\/strong><\/a><\/td>\n                                <td class=\"F20H37\" align=\"right\" valign=\"middle\" width=\"48%\" height=\"36\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#ffffff;font-weight:bold; vertical-align:middle;\"><a href=\"https:\/\/www.carters.com\/bopis-lp.html\" target=\"_blank\" alias=\"PREHEADER_1_TEXT_MULTI_MULTI_FIND_A_STORE\" style=\"color:#ffffff; text-decoration:none;\" class=\"BlueBar\"><strong style=\"color:#ffffff; text-decoration:none;\" class=\"BlueBar\">Order online. Pick up today.<\/strong><\/a><\/td>\n                                <td align=\"left\" valign=\"top\" width=\"2%\"><\/td>\n                            <\/tr>\n                        <\/table>\n                        %%[ENDIF]%%\n                        <!'+'--Shipping Banner End--'+'>\n                        <!'+'--Spacer--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" bgcolor=\"#ffffff\" class=\"\" height=\"25\" style=\"line-height:25px; font-size:25px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Spacer End--'+'>\n                        <!'+'--Logo--'+'>\n                        <table cellpadding=\"0\" align=\"center\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"10\" class=\"hide\">&nbsp;<\/td>\n                                <td align=\"center\" valign=\"top\" width=\"616\">\n                                    <table class=\"w100P\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"170\">\n                                        <tr>\n                                            <td align=\"center\" valign=\"middle\" width=\"100%\">\n                                                <a href=\"https:\/\/www.carters.com\/\" alias=\"HEADER_1_MULTI_MULTI_LOGO\" target=\"_blank\" title=\"Carter\'s\"><img class=\"CARLogoNew\" src=\"http:\/\/image.em.carters.com\/lib\/fe9b13727561007f75\/m\/22\/CAR_LOGO-rgbv2.jpg\" alt=\"Carter\'s\" title=\"Carter\'s\" width=\"170\" height=\"36\" style=\"display:block;\" border=\"0\"><\/a>\n                                            <\/td>\n                                        <\/tr>\n                                    <\/table>\n                                <\/td>\n                                <td align=\"left\" valign=\"top\" width=\"10\" class=\"hide\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Logo End--'+'>\n                        <!'+'--Spacer--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td class=\"H20\" align=\"left\" valign=\"top\" width=\"100%\" bgcolor=\"#ffffff\" height=\"25\" style=\"line-height:25px; font-size:25px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Spacer End--'+'>\n                        <!'+'--Nav--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"position:relative;\">\n                            <tr class=\"posRel navH\">\n                                <td class=\"hide\" align=\"left\" valign=\"top\" width=\"10\"><\/td>\n                                <td align=\"left\" valign=\"top\" width=\"358\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                                        <tr>\n                                            <td class=\"navBG posAbs\" width=\"112\" align=\"left\" valign=\"top\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:normal; color:#5b6770;\"><a href=\"https:\/\/www.carters.com\/carters-baby-girl\" target=\"_blank\" alias=\"HEADER_1_BABY_GIRL\" style=\"color:#5b6770; text-decoration:none;\" class=\"NavLinks\"><strong style=\"color:#5b6770; text-decoration:none;font-weight:normal;\" class=\"NavLinks\">BABY GIRL<\/strong><\/a><\/td>\n                                            <td class=\"navBB posAbs\" width=\"107\" align=\"left\" valign=\"top\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:normal; color:#5b6770;\"><a href=\"https:\/\/www.carters.com\/carters-baby-boy\" target=\"_blank\" alias=\"HEADER_1_BABY_BOY\" style=\"color:#5b6770; text-decoration:none;\" class=\"NavLinks\"><strong style=\"color:#5b6770; text-decoration:none;font-weight:normal;\" class=\"NavLinks\">BABY BOY<\/strong><\/a><\/td>\n                                            <td class=\"navTG posAbs\" width=\"139\" align=\"left\" valign=\"top\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:normal; color:#5b6770;\"><a href=\"https:\/\/www.carters.com\/carters-toddler-girl\" target=\"_blank\" alias=\"HEADER_1_TODDLER_GIRL\" style=\"color:#5b6770; text-decoration:none;\" class=\"NavLinks\"><strong style=\"color:#5b6770; text-decoration:none;font-weight:normal;\" class=\"NavLinks\">TODDLER GIRL<\/strong><\/a><\/td>\n                                        <\/tr>\n                                    <\/table>\n                                <\/td>\n                                <td align=\"left\" valign=\"top\" width=\"258\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                                        <tr>\n                                            <td class=\"navTB posAbs\" width=\"153\" align=\"left\" valign=\"top\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:normal; color:#5b6770;\"><a href=\"https:\/\/www.carters.com\/carters-toddler-boy\" target=\"_blank\" alias=\"HEADER_1_TODDLER_BOY\" style=\"color:#5b6770; text-decoration:none;\" class=\"NavLinks\"><strong style=\"color:#5b6770; text-decoration:none;font-weight:normal;\" class=\"NavLinks\">TODDLER BOY<\/strong><\/a><\/td>\n                                            <td class=\"navG posAbs\" width=\"75\" valign=\"top\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:normal; color:#5b6770; text-align:left;\"><a href=\"https:\/\/www.carters.com\/carters-kid-girl\" target=\"_blank\" alias=\"HEADER_1_KID_GIRL\" style=\"color:#5b6770; text-decoration:none;\" class=\"NavLinks\"><strong style=\"color:#5b6770; text-decoration:none;font-weight:normal;\" class=\"NavLinks\">GIRL<\/strong><\/a><\/td>\n                                            <td class=\"navB posAbs\" width=\"30\" align=\"left\" valign=\"top\" style=\" font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:normal; color:#5b6770;\"><a href=\"https:\/\/www.carters.com\/carters-kid-boy\" target=\"_blank\" alias=\"HEADER_1_KID_BOY\" style=\"color:#5b6770; text-decoration:none;\" class=\"NavLinks\"><strong style=\"color:#5b6770; text-decoration:none;font-weight:normal;\" class=\"NavLinks\">BOY<\/strong><\/a><\/td>\n                                        <\/tr>\n                                    <\/table>\n                                <\/td>\n                                <td class=\"hide\" align=\"left\" valign=\"top\" width=\"10\"><\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Nav End--'+'>\n                        <!'+'--Spacer--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" bgcolor=\"#ffffff\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                            <tr>\n                                <td bgcolor=\"#e4e4e4\" align=\"left\" valign=\"top\" width=\"100%\" class=\"\" height=\"1\" style=\"line-height:1px; font-size:1px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Spacer End--'+'>\n      \n                        %%=ContentBlockByName(\"Shared Content\\Loyalty\\Equity Bar\\RM-EquityBar-2018Campaign_MI\")=%%\n\n                        %%=ContentBlockByName(\"Shared Content\\Loyalty\\RM-ExpiringRewardsBanner_MI\")=%%\n                           <!'+'--Loyalty Tier banners--'+'>\n                        %%=contentblockbyname(\'Shared Content\\Loyalty\\TierProgram\\LoyaltyTierBanners\')=%%\n                        <!'+'--\/Loyalty Tier banners--'+'>\n                        \n                        <!'+'--Closest Store Banner--'+'>\n                        %%[IF @CSB == \"Y\" THEN]%% \n                            %%=ContentBlockByName(\"Shared Content\\Closest Store\\New_Closest_Bopis_Store-MInk\")=%% \n                            %%[ENDIF]%%\n                        <!'+'--\/Closest Store Banner--'+'>\n                            \n                       \n                            \n                        <!'+'--Fun Cash Banners--'+'>\n                        %%=contentblockbyname(\'Shared Content\\Loyalty\\FUNCASH \\FunCash-DynamicBanner-EARN\')=%%\n                        <!'+'--\/Fun Cash Banners--'+'>\n                            \n                        <!'+'--Store Hours Banner--'+'>\n                        %%=contentblockbyname(\'Shared Content\\StoreHours\\StoreHoursBanner\')=%%\n                        <!'+'--\/Store Hours Banner--'+'>\n                        \n                        <!'+'--Add Body Content between these comments only! Do not touch the rest of the template unless updating the legal area--'+'>\n                        <!'+'-- BACKGROUND TABLE BREAK --'+'>\n                    <\/td>\n                <\/tr>\n            <\/table>\n        <\/td>\n    <\/tr>\n<\/table>\n<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" width=\"100%\" bgcolor=\"#ffffff\">\n    <tr>\n        <td align=\"center\" valign=\"top\">\n            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" width=\"636\" bgcolor=\"#ffffff\" class=\"container\" style=\"margin:0 auto;\">\n                <tr>\n                    <td align=\"left\" valign=\"top\">\n                        <!'+'-- \/\/BACKGROUND TABLE BREAK --'+'>\n\n';

const templateClose = '<!'+'-- BACKGROUND TABLE BREAK --'+'>\n                    <\/td>\n                <\/tr>\n            <\/table>\n        <\/td>\n    <\/tr>\n<\/table>\n<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" width=\"100%\" bgcolor=\"#ffffff\">\n    <tr>\n        <td align=\"center\" valign=\"top\">\n            <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\" width=\"636\" bgcolor=\"#ffffff\" class=\"container\" style=\"margin:0 auto;\">\n                <tr>\n                    <td align=\"left\" valign=\"top\">\n                        <!'+'-- \/\/BACKGROUND TABLE BREAK --'+'>\n                        \n                        <!'+'--PLCC * THIS IS MOVABLE TO HIGHER IN THE EMAIL--'+'>\n                        %%[IF @PLCCbanner == \"Y\" Then]%%\n                        %%=contentblockbyname(\"Shared Content\\PLCC\\PLCC_Banner\")=%%\n                        %%[Endif]%%\n                        <!'+'--\/PLCC * THIS IS MOVABLE TO HIGHER IN THE EMAIL--'+'>\n\n                        <!'+'--BOPIS MI BANNER * THIS IS MOVABLE TO HIGHER IN THE EMAIL--'+'>\n                        %%=ContentBlockByName(\"Shared Content\\BOSS\\BOPIS-RM-Banners\")=%%\n                        <!'+'--\/BOPIS MI BANNER * THIS IS MOVABLE TO HIGHER IN THE EMAIL--'+'>\n\n                        <!'+'--AC MInk Banner--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\"><a href=\"http:\/\/mi.carters.com\/p\/cp\/032fa9898a1f331c\/c?mi_u=%%=v(md5(emailaddr))=%%&mi_ecmp=%%emailname_%%&url=http%3A%2F%2Fmi.carters.com%2Fp%2Frp%2Fc47ac3c9d7ec6b33%2Furl\" target=\"_blank\" alias=\"\" title=\"\"><img src=\"http:\/\/mi.carters.com\/p\/rp\/c47ac3c9d7ec6b33.png?mi_u=%%=v(md5(emailaddr))=%%&mi_ecmp=%%emailname_%%\" border=\"0\" alt=\"\" title=\"\" height=\"\" width=\"636\" style=\"display: block;\"><\/a><\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--\/AC MInk Banner--'+'>\n                        \n                        <!'+'--Abandon Browse--'+'>\n                        %%[IF @BrowsePods == \"Y\" Then]%%\n                        %%=contentblockbyname(\"Shared Content\\MovableInk\\BrowsePods\")=%%\n                        %%[Endif]%%\n                        <!'+'--\/Abandon Browse--'+'>\n                        \n                        <!'+'--SMS--'+'>\n                        %%[IF @SMS == \"Y\" Then]%%\n                        %%=contentblockbyname(\"Content Builder\\SMS\\CAR_SMS_BANNER\")=%%\n                        %%[Endif]%%\n                        <!'+'--\/SMS--'+'>\n                        \n                        <!'+'-- COUPON --'+'>\n                        %%[\n                        IF @Show_Coupon == \"Y\" THEN\n                        ]%%\n                        %%=ContentBlockByName(\"Content Builder\\My Contents\\Campaign Coupons\\Coupon_AMPscript_Master_MERKLE\")=%%\n                        %%[ ENDIF ]%%\n                        <!'+'-- \/\/COUPON --'+'>                        \n                        <!'+'--\/Add Body Content--'+'>\n\n                        <!'+'-- MI CLOSEST STORE--'+'>\n                        %%=ContentBlockByName(\"Shared Content\\Closest Store\\MInkClosestStore\")=%%\n                        <!'+'--\/\/MI CLOSEST STORE --'+'>\n                      \n\n                        <!'+'--Spacer--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" height=\"20\" style=\"border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-line-height-rule: exactly; line-height: 20px;\">\n                                    <!'+'--[if gte mso 15]>&nbsp;<![endif]--'+'>\n                                <\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Spacer End—>\n\n\n                        <!'+'-- TRIBRAND FOOTER --'+'>\n                        %%=ContentBlockByName(\"Shared Content\\TriBrandFooter\\TriBrand_Footer\")=%%\n                        <!'+'-- \/\/TRIBRAND FOOTER --'+'>\n                        \n                        \n                        <!'+'--Footer--'+'>\n                        <!'+'--Social Icons Footer--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td bgcolor=\"#e3e3e3\" align=\"left\" valign=\"top\" width=\"100%\" class=\"\" height=\"1\" style=\"line-height:1px; font-size:1px;\">&nbsp;<\/td>\n                            <\/tr>\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" bgcolor=\"#ffffff\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"88%\">\n                                    <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                                        <tr>\n                                            <td class=\"P18\" width=\"17%\" align=\"left\" valign=\"top\"><a href=\"http:\/\/www.facebook.com\/carters\" target=\"_blank\" alias=\"FOOTER_1_MULTI_MULTI_FACEBOOK\" title=\"Facebook\"><img src=\"http:\/\/image.em.carters.com\/lib\/fe9a13727561007f74\/m\/1\/ShipConf_Responsive_Facebook.jpg\" alt=\"Facebook\" title=\"Facebook\" class=\"HW55\" width=\"59\" height=\"59\" style=\"display:block;\" border=\"0\"><\/a><\/td>\n                                            <td width=\"20%\" align=\"center\" valign=\"top\"><a href=\"http:\/\/www.youtube.com\/cartersbabiesandkids\" target=\"_blank\" alias=\"FOOTER_1_MULTI_MULTI_YOUTUBE\" title=\"YouTube\"><img src=\"http:\/\/image.em.carters.com\/lib\/fe9a13727561007f74\/m\/1\/ShipConf_Responsive_YouTube.jpg\" alt=\"YouTube\" title=\"YouTube\" class=\"HW55\" width=\"59\" height=\"59\" style=\"display:block;\" border=\"0\"><\/a><\/td>\n                                            <td class=\"P20\" width=\"22%\" align=\"center\" valign=\"top\"><a href=\"https:\/\/twitter.com\/Carters\" target=\"_blank\" alias=\"FOOTER_1_MULTI_MULTI_TWITTER\" title=\"Twitter\"><img src=\"http:\/\/image.em.carters.com\/lib\/fe9a13727561007f74\/m\/1\/ShipConf_Responsive_Twitter.jpg\" alt=\"Twitter\" title=\"Twitter\" class=\"HW55\" width=\"59\" height=\"59\" style=\"display:block;\" border=\"0\"><\/a><\/td>\n                                            <td width=\"20%\" align=\"center\" valign=\"top\"><a href=\"http:\/\/pinterest.com\/CartersBabyKids\/\" target=\"_blank\" alias=\"FOOTER_1_MULTI_MULTI_PINTEREST\" title=\"Pinterest\"><img src=\"http:\/\/image.em.carters.com\/lib\/fe9a13727561007f74\/m\/1\/ShipConf_Responsive_Pinterest.jpg\" alt=\"Pinterest\" title=\"Pinterest\" class=\"HW55\" width=\"59\" height=\"59\" style=\"display:block;\" border=\"0\"><\/a><\/td>\n                                            <td class=\"P18\" width=\"17%\" align=\"right\" valign=\"top\"><a href=\"http:\/\/instagram.com\/carters\" target=\"_blank\" alias=\"FOOTER_1_MULTI_MULTI_INSTAGRAM\" title=\"Instagram\"><img src=\"http:\/\/image.em.carters.com\/lib\/fe9a13727561007f74\/m\/1\/ShipConf_Responsive_Instagram.jpg\" alt=\"Instagram\" title=\"Instagram\" class=\"HW55\" width=\"59\" height=\"59\" style=\"display:block;\" border=\"0\"><\/a><\/td>\n                                        <\/tr>\n                                    <\/table>\n                                <\/td>\n                            <\/tr>\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" bgcolor=\"#ffffff\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                            <tr>\n                                <td bgcolor=\"#e3e3e3\" align=\"left\" valign=\"top\" width=\"100%\" class=\"\" height=\"1\" style=\"line-height:1px; font-size:1px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" bgcolor=\"#ffffff\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td bgcolor=\"#f1f1f1\" align=\"left\" valign=\"top\" width=\"100%\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                            <tr>\n                                <td align=\"center\" valign=\"middle\" width=\"88%\" height=\"30\" bgcolor=\"#f1f1f1\" style=\" font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:16px;color:#666666;\" class=\"F32\">\n                                    &copy; %%=Datepart(Now(),\"Y\")=%% carter\'s inc. | <a href=\"https:\/\/www.carters.com\/find_a_store\" target=\"_blank\" style=\"color:#666666; text-decoration:none;\" alias=\"FOOTER_1_MULTI_MULTI_FIND_A_STORE\" title=\"Store Locator\" class=\"footerLink\"><strong style=\"color:#666666; text-decoration:none;font-weight:normal;\" class=\"footerLink\">Store Locator<\/strong><\/a> | <a href=\"https:\/\/www.carters.com\/cs-contactus.html\" target=\"_blank\" style=\"color:#666666; text-decoration:none;\" alias=\"FOOTER_1_MULTI_MULTI_CONTACT_US\" title=\"Contact Us\" class=\"footerLink\"><strong style=\"color:#666666; text-decoration:none;font-weight:normal;\" class=\"footerLink\">Contact&nbsp;Us<\/strong><\/a> | <a href=\"https:\/\/www.carters.com\/privacy\/privacy-policy.html\" target=\"_blank\" style=\"color:#666666; text-decoration:none;\" alias=\"FOOTER_1_MULTI_MULTI_PRIVACY_POLICY\" title=\"Privacy Policy\" class=\"footerLink\"><strong style=\"color:#666666; text-decoration:none;font-weight:normal;\" class=\"footerLink\">Privacy&nbsp;Policy<\/strong><\/a>\n                                    <br><br>\n                                    <strong style=\"font-size:18px;\" class=\"gblue F34\">Customer Service: 1-877-333-0117<\/strong>\n                                <\/td>\n                            <\/tr>\n                            <tr>\n                                <td bgcolor=\"#f1f1f1\" align=\"left\" valign=\"top\" width=\"100%\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" width=\"100%\" class=\"\" height=\"20\" style=\"line-height:20px; font-size:20px;\">&nbsp;<\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Social Icons Footer End--'+'>\n                        <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\n                            <tr>\n                                <td align=\"left\" valign=\"top\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666; vertical-align:top;\" class=\"footerLink2 F24\">\n                                    \n                                    <!'+'--CAMPAIGN LEGAL--'+'>\n                                    %%=ContentBlockByName(\"Content Builder\\My Contents\\Campaign LEGAL\\CAR_Campaign_Legal\")=%%\n                                    <!'+'--\/CAMPAIGN LEGAL--'+'>\n                                    \n                                    <!'+'--COUPON LEGAL--'+'>\n                                    %%[ IF @Show_Coupon == \"Y\" THEN ]%%\n                                    <strong>IN STORE &amp; ONLINE COUPON:<\/strong> %%=v(@LegalCopy)=%%\n                                    %%[ ENDIF ]%%\n                                    <!'+'--\/COUPON LEGAL--'+'>\n                                    \n                                    <strong>Store Locator<\/strong>\n                                    <br> To find a location near you, visit our website at <a href=\"https:\/\/www.carters.com\/find_a_store\" target=\"_blank\" alias=\"FOOTER_2_MULTI_MULTI_FIND_A_STORE\" title=\"Carters.com\" style=\"color:#666666; text-decoration:underline;\" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight:normal;\" class=\"footerLink2\">Carters.com<\/strong><\/a>\n                                    <br>\n                                    <br> For general inquiries, please call our Consumer Affairs at <strong style=\"color:#666666; text-decoration:none;font-weight:normal;\" class=\"footerLink gblue\">888-782-9548<\/strong>\n                                    <br> For questions on your order, or to place an order, please call our Online Store at <strong style=\"color:#666666; text-decoration:none;font-weight:normal;\" class=\"footerLink gblue\">877-333-0117<\/strong>\n                                    <br>\n                                    <br> In-store promotions valid only in Carter\'s retail stores in the U.S. and Puerto Rico (excluding Barceloneta stores). Online promotions valid at <strong style=\"color:#666666; text-decoration:none;font-weight:normal;\" class=\"footerLink gblue\">carters.com<\/strong>. Percent-off savings based on MSRP. Online prices, promotions and selection may differ from those in our retail stores. Not valid for cash. No adjustments on previous purchases. Available while supplies last. Carter\'s reserves the right to modify or discontinue these promotions at any time.\n                                    <br>\n                                    <br>\n                                    \n                                    <strong>Were you forwarded this email?<\/strong>\n                                    <br>\n                                    <a href=\"https:\/\/www.carters.com\/\" alias=\"FOOTER_1_MULTI_MULTI_FORWARD\" title=\"Sign up for Carter\'s emails\" target=\"_blank\" style=\"color:#666666; text-decoration:underline;\" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight:normal;\" class=\"footerLink2\">Sign up for Carter\'s emails<\/strong><\/a>.\n                                    <br>\n                                    <br>\n                                    <strong>Privacy Policy<\/strong>\n                                    <br> Carter\'s values its customers and respects their privacy. <a href=\"https:\/\/www.carters.com\/privacy\/privacy-policy.html\" alias=\"FOOTER_2_MULTI_MULTI_PRIVACY_POLICY\" title=\"Privacy Policy\" target=\"_blank\" style=\"color:#666666; text-decoration:underline;\" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight:normal;\" class=\"footerLink2\">View<\/strong><\/a> our Privacy Policy.\n                                    <br>\n                                    <br>\n                                    <strong>Terms &amp; Conditions<\/strong>\n                                    <br><a href=\"https:\/\/www.carters.com\/disclaimer.html\" alias=\"FOOTER_2_MULTI_MULTI_TERMS_CONDITIONS\" target=\"_blank\" style=\"color: #666666;\" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight: normal;\" class=\"footerLink2\">Click to view our Terms &amp; Conditions<\/strong><\/a>\n                                    <br>\n                                    <br>\n                                    <strong>Unsubscribe<\/strong>\n                                    <br> To unsubscribe from our email list, just <a href=\"%%profile_center_url%%\" alias=\"FOOTER_1_MULTI_MULTI_UNSUBSCRIBE\" title=\"To unsubscribe from our email list, just click here.\" target=\"_blank\" style=\"color:#666666; text-decoration:underline;\" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight:normal;\" class=\"footerLink2\">click here<\/strong><\/a>. To manage your email preferences, <a href=\"%%profile_center_url%%\" alias=\"FOOTER_1_MULTI_MULTI_PREFERENCE\" title=\"To manage your email preferences, click here.\" target=\"_blank\" style=\" color: #666666; \" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight:normal;\" class=\"footerLink2\">click here<\/strong><\/a>.\n                                    <br>\n                                    <br>\n                                    <strong>Return Policy<\/strong>\n                                    <br>\n                                    <a href=\"https:\/\/www.carters.com\/Returns\/cs-returns,default,pg.html?id=carters\" alias=\"FOOTER_1_MULTI_MULTI_RETURN_POLICY\" title=\"Click here to view our Return Policy.\" target=\"_blank\" style=\"color:#666666; text-decoration:underline;\" class=\"footerLink2\"><strong style=\"color:#666666; text-decoration:underline;font-weight:normal;\" class=\"footerLink2\">Click to view our Return Policy<\/strong><\/a>.\n                                    <br>\n                                    <br>\n                                <\/td>\n                            <\/tr>\n                            <tr>\n                                <td align=\"left\" valign=\"top\" height=\"28\" style=\"font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#666666; vertical-align:top;\" class=\"footerLink F24\">&copy;%%Member_Busname%%, %%Member_Addr%%, %%Member_City%%, %%Member_State%% %%Member_PostalCode%%\n                                <\/td>\n                            <\/tr>\n                        <\/table>\n                        <!'+'--Footer End--'+'>\n                    <\/td>\n                <\/tr>\n            <\/table>\n        <\/td>\n    <\/tr>\n<\/table>\n\n<custom name=\"opencounter\" type=\"tracking\">\n%%[ *\/ Output conversant pixesl* \/ if @DisplayConversant == \'y\' then ]%% %%=contentblockbyname(\'Content Builder\\My Contents\\Conversant\\Conversant\')=%% %%[else endif]%%\n<table width=\"1\" height=\"1\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"font-size:0px; line-height:0px;\"><img src=\"http:\/\/mi.carters.com\/p\/up\/cc5c7dbc4eaf49f6\/o.gif?mi_u=%%=v(md5(emailaddr))=%%&mi_ecmp=%%emailname_%%\" width=\"1\" height=\"1\" \/><\/td><\/tr><\/table>\n<\/body>\n<\/html>';