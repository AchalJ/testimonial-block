(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(e,t,i){}}]),function(e){function t(t){for(var n,l,c=t[0],r=t[1],s=t[2],b=0,u=[];b<c.length;b++)l=c[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&u.push(o[l][0]),o[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(m&&m(t);u.length;)u.shift()();return a.push.apply(a,s||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,c=1;c<i.length;c++){var r=i[c];0!==o[r]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=i[0]))}return e}var n={},o={0:0},a=[];function l(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(i,n,function(t){return e[t]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var m=r;a.push([21,1]),i()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e){e.exports=JSON.parse('{"name":"ideabox/testimonial","title":"Testimonial","category":"widgets","icon":"editor-quote","description":"A block to display testimonial on the site.","textdomain":"ib-testimonial","keywords":["testimonial","review","quote"],"supports":{"html":false,"align":true},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}')},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e){throw new Error('"'+e+'" is read-only')}},function(e,t){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},function(e,t,i){var n=i(13),o=i(14),a=i(15),l=i(17);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||l()}},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t,i){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(i.push(l.value),!t||i.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return i}}},function(e,t,i){var n=i(16);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(6),o=i(1),a={blockId:{type:"string",default:void 0},content:{type:"string",default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."},contentFontSizeDesktop:{type:"number",default:""},contentFontSizeTablet:{type:"number",default:""},contentFontSizeMobile:{type:"number",default:""},imageData:{type:"object",default:{id:void 0,alt:"",size:"thumbnail",url:""}},imageSize:{type:"number",default:30},imageBorderRadius:{type:"number",default:50},name:{type:"string",default:"John Doe"},nameFontSizeDesktop:{type:"number",default:""},nameFontSizeTablet:{type:"number",default:""},nameFontSizeMobile:{type:"number",default:""},title:{type:"string",default:"Web Developer"},titleFontSize:{type:"number",default:""},titleFontSizeTablet:{type:"number",default:""},titleFontSizeMobile:{type:"number",default:""},imagePosition:{type:"string",default:"left"},textAlign:{type:"string",default:"center"}},l=i(7),c=i.n(l),r=i(0),s=i(2),m=i(3),b=i(4),u=Object(r.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(b.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),d=Object(r.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(b.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),p=Object(r.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(b.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),f=(i(12),wp.compose.withState),g=wp.components,v=g.RangeControl,O=g.BaseControl,j=g.DropdownMenu,h=wp.i18n.__,y=function(e){return Object(r.createElement)(v,{value:e.value,min:e.min?e.min:1,max:e.max?e.max:100,allowReset:!0,onChange:e.onChange})},S=f({device:"desktop"})((function(e){var t=e.device,i="desktop"===t?u:"tablet"===t?d:"mobile"===t?p:u;return Object(r.createElement)(O,{label:e.label,className:"ib-block-control--panel"},Object(r.createElement)(j,{label:h("Responsive"),icon:i,controls:[{icon:u,title:h("Desktop"),onClick:function(){return e.setState({device:"desktop"})}},{icon:d,title:h("Tablet"),onClick:function(){return e.setState({device:"tablet"})}},{icon:p,title:h("Mobile"),onClick:function(){return e.setState({device:"mobile"})}}]}),"desktop"===t&&Object(r.createElement)(y,{value:e.value.desktop,onChange:function(i){e.onChange(i,t)},min:e.min,max:e.max}),"tablet"===t&&Object(r.createElement)(y,{value:e.value.tablet,onChange:function(i){e.onChange(i,t)},min:e.min,max:e.max}),"mobile"===t&&Object(r.createElement)(y,{value:e.value.mobile,onChange:function(i){e.onChange(i,t)},min:e.min,max:e.max}))})),x=i(8),z=i.n(x),w=i(9),_=i.n(w),E=i(10),k=i(11);i(18);function C(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?C(Object(i),!0).forEach((function(t){z()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N=["image"],T=Object(E.compose)(Object(k.withSelect)((function(e,t){var i=e("core").getMedia,n=t.value.id;return{image:n?i(n):null}})))((function(e){var t=e.image,i=e.i18n,n={id:void 0,alt:"",size:"thumbnail",url:""},a=e.value||n,l=a.id,c=a.size||"thumbnail",b={uploadImage:i&&i.uploadImage?i.uploadImage:Object(o.__)("Upload image"),imageSize:i&&i.imageSize?i.imageSize:Object(o.__)("Image Size")},u=Object(r.useState)(a),d=_()(u,2),p=d[0],f=d[1];Object(r.useEffect)((function(){p&&e.onChange(p)}),[p]);var g=function(e){var t=e.id,i=e.sizes,n=e.alt;f({id:t,alt:n,size:c,url:i[c].url})};return Object(r.createElement)(m.BaseControl,{label:e.label,className:"ib-block-control__image"},Object(r.createElement)(s.MediaUploadCheck,null,Object(r.createElement)(s.MediaUpload,{title:e.label,onSelect:g,allowedTypes:N,value:l,render:function(e){var i=e.open;return Object(r.createElement)(m.Button,{className:l?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:i},!l&&b.uploadImage,!!l&&!t&&Object(r.createElement)(m.Spinner,null),!!l&&t&&Object(r.createElement)(m.ResponsiveWrapper,{naturalWidth:t.media_details.width,naturalHeight:t.media_details.height},Object(r.createElement)("img",{src:t.source_url,alt:t.alt})))}})),!!l&&Object(r.createElement)("div",{className:"ib-block-control__image-actions components-button-group"},t&&Object(r.createElement)(s.MediaUploadCheck,null,Object(r.createElement)(s.MediaUpload,{title:e.label,onSelect:g,allowedTypes:N,value:l,render:function(e){var t=e.open;return Object(r.createElement)(m.Button,{onClick:t,icon:"edit"})}})),Object(r.createElement)(s.MediaUploadCheck,null,Object(r.createElement)(m.Button,{onClick:function(){f({id:void 0,alt:"",size:c,url:""})},icon:"trash",isDestructive:!0}))),!!l&&t&&Object(r.createElement)(m.SelectControl,{label:b.imageSize,className:"ib-block-control__image-size",value:c,options:[{label:Object(o.__)("Full"),value:"full"},{label:Object(o.__)("Large"),value:"large"},{label:Object(o.__)("Medium"),value:"medium"},{label:Object(o.__)("Thumbnail"),value:"thumbnail"}],onChange:function(e){var i,n,o=null===(i=t.media_details)||void 0===i||null===(n=i.sizes[e])||void 0===n?void 0:n.source_url;o&&f(F(F({},p),{},{size:e,url:o}))}}))})),P=function(e){var t=e.attributes,i=e.setAttributes,n=t.contentFontSizeDesktop,a=t.contentFontSizeTablet,l=t.contentFontSizeMobile,c=t.imageBorderRadius,b=t.nameFontSizeDesktop,u=t.nameFontSizeTablet,d=t.nameFontSizeMobile,p=t.titleFontSize,f=t.titleFontSizeTablet,g=t.titleFontSizeMobile,v=t.imagePosition;return Object(r.createElement)(s.InspectorControls,null,Object(r.createElement)(m.PanelBody,{title:Object(o.__)("Content","ib-testimonial")},Object(r.createElement)(T,{i18n:{imageSize:Object(o.__)("Image Size","ib-testimonial"),uploadImage:Object(o.__)("Choose or Upload an image","ib-testimonial")},value:t.imageData,onChange:function(e){i({imageData:e})}}),Object(r.createElement)(m.SelectControl,{label:Object(o.__)("Image Position","ib-testimonial"),value:v,options:[{label:Object(o.__)("Left","ib-testimonial"),value:"left"},{label:Object(o.__)("Top","ib-testimonial"),value:"top"},{label:Object(o.__)("Right","ib-testimonial"),value:"right"}],onChange:function(e){i({imagePosition:e})}})),Object(r.createElement)(m.PanelBody,{title:Object(o.__)("Customize","ib-testimonial"),initialOpen:!1},Object(r.createElement)(S,{label:Object(o.__)("Content Font Size","ib-testimonial"),value:{desktop:n,tablet:a,mobile:l},onChange:function(e,t){"desktop"===t&&i({contentFontSizeDesktop:e}),"tablet"===t&&i({contentFontSizeTablet:e}),"mobile"===t&&i({contentFontSizeMobile:e})}}),Object(r.createElement)(S,{label:Object(o.__)("Name Font Size","ib-testimonial"),value:{desktop:b,tablet:u,mobile:d},onChange:function(e,t){"desktop"===t&&i({nameFontSizeDesktop:e}),"tablet"===t&&i({nameFontSizeTablet:e}),"mobile"===t&&i({nameFontSizeMobile:e})}}),Object(r.createElement)(S,{label:Object(o.__)("Title Font Size","ib-testimonial"),value:{desktop:p,tablet:f,mobile:g},onChange:function(e,t){"desktop"===t&&i({titleFontSize:e}),"tablet"===t&&i({titleFontSizeTablet:e}),"mobile"===t&&i({titleFontSizeMobile:e})}}),Object(r.createElement)(m.RangeControl,{label:Object(o.__)("Image Border Radius","ib-testimonial"),value:c,onChange:function(e){return i({imageBorderRadius:e})},min:0,max:100,step:1})))},M=function(e){var t=e.attributes,i=t.blockId,n=t.contentFontSizeDesktop,o=t.contentFontSizeTablet,a=t.contentFontSizeMobile,l=t.imageSize,c=t.imageBorderRadius,s=t.imagePosition,m=t.nameFontSizeDesktop,b=t.nameFontSizeTablet,u=t.nameFontSizeMobile,d=t.titleFontSize,p=t.titleFontSizeTablet,f=t.titleFontSizeMobile,g=t.textAlign,v="#ib-testimonial-".concat(i),O={desktop:{".ib-testimonial-block":{"text-align":g},".ib-testimonial--image img":{width:l?l+"px":void 0,"border-radius":void 0!==c?c+"px":c},".ib-testimonial--name":{"font-size":m?m+"px":void 0},".ib-testimonial--title":{"font-size":d?d+"px":void 0},".ib-testimonial--content":{"font-size":n?n+"px":void 0},".ib-testimonial--details":{"text-align":g},".ib-testimonial--meta":{"justify-content":"left"===g?"flex-start":"right"===g?"flex-end":g,"align-items":"top"===s&&"left"===g?"flex-start":"top"===s&&"right"===g?"flex-end":void 0}},tablet:{".ib-testimonial--name":{"font-size":b?b+"px":void 0},".ib-testimonial--title":{"font-size":p?p+"px":void 0},".ib-testimonial--content":{"font-size":o?o+"px":void 0}},mobile:{".ib-testimonial--name":{"font-size":u?u+"px":void 0},".ib-testimonial--title":{"font-size":f?f+"px":void 0},".ib-testimonial--content":{"font-size":a?a+"px":void 0}}};return"right"===g&&"right"===s&&(O.desktop[".ib-testimonial--meta"]={"justify-content":"flex-start"}),"left"===g&&"right"===s&&(O.desktop[".ib-testimonial--meta"]={"justify-content":"flex-end"}),function(e,t){var i={tablet:992,mobile:768};if(void 0===e.desktop)throw new Error("Parser: Invalid CSS.");var n="";return Object.keys(e).map((function(o){void 0!==o&&("tablet"!==o&&"mobile"!==o||(n+="@media only screen and (max-width: ".concat(i[o],"px) { ")),Object.keys(e[o]).map((function(i){if(void 0!==i){n+=t,"selector"!==i&&(n+=" "+i),n+=" { ";var a=e[o][i];Object.keys(a).map((function(e){void 0!==e&&void 0!==a[e]&&""!==a[e]&&(n+=e+": "+a[e]+"; ")})),n+="} "}})),"tablet"!==o&&"mobile"!==o||(n+="} "))})),Object(r.createElement)("style",null,n)}(O,v)},D=function(e){var t=e.attributes,i=e.setAttributes,n=t.content,a=t.contentColor,l=t.imageData,b=t.name,u=t.nameColor,d=t.title,p=t.titleColor,f=t.imagePosition,g=t.imageSize,v=t.textAlign;if(g&&!isNaN(g)||(c()("imageSize"),g=50),e.isSelected&&!e.blockId){var O=e.clientId;i({blockId:O.replace(/-/g,"")})}return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(s.BlockControls,null,Object(r.createElement)(s.AlignmentToolbar,{value:v,onChange:function(e){return i({textAlign:e})}})),Object(r.createElement)(P,{attributes:t,setAttributes:i}),Object(r.createElement)(M,{attributes:t}),Object(r.createElement)("div",{id:"ib-testimonial-".concat(t.blockId),className:e.className},Object(r.createElement)("div",{className:"ib-testimonial-block"},Object(r.createElement)(s.RichText,{tagName:"div",className:"ib-testimonial--content",value:n,onChange:function(e){return i({content:e})},placeholder:Object(o.__)("Add testimonial content...","ib-testimonial"),allowedFormats:["core/bold","core/italic","core/text-color"],style:{color:a},keepPlaceholderOnFocus:!0}),Object(r.createElement)("div",{className:"ib-testimonial--meta image-".concat(f)},l&&l.id&&Object(r.createElement)("div",{className:"ib-testimonial--image"},Object(r.createElement)(m.ResizableBox,{className:"ib-testimonial--image-box",size:{imageSize:g},minWidth:50,maxWidth:250,enable:{top:!0,right:!0,bottom:!0,left:!0},lockAspectRatio:!0,onResizeStop:function(e,t,n,o){i({imageSize:parseInt(g+o.width,10)})},showHandle:e.isSelected},Object(r.createElement)("img",{src:l.url,alt:l.alt}))),Object(r.createElement)("div",{className:"ib-testimonial--details"},Object(r.createElement)(s.RichText,{identifier:"name",tagName:"div",className:"ib-testimonial--name",value:b,onChange:function(e){return i({name:e})},placeholder:Object(o.__)("Name","ib-testimonial"),style:{color:u},allowedFormats:["core/bold","core/italic","core/link","core/text-color"],disableLineBreaks:!0,keepPlaceholderOnFocus:!0}),Object(r.createElement)(s.RichText,{tagName:"div",className:"ib-testimonial--title",value:d,onChange:function(e){return i({title:e})},placeholder:Object(o.__)("Title","ib-testimonial"),style:{color:p},allowedFormats:["core/bold","core/italic","core/link","core/text-color"],disableLineBreaks:!0,keepPlaceholderOnFocus:!0}))))))},R=function(e){var t=e.attributes,i=e.className,n=t.blockId,o=t.content,a=t.imageData,l=t.name,c=t.title,m=t.imagePosition;return Object(r.createElement)("div",null,Object(r.createElement)(M,{attributes:t}),Object(r.createElement)("div",{id:"ib-testimonial-".concat(n),className:i},Object(r.createElement)("div",{className:"ib-testimonial-block"},Object(r.createElement)("div",{className:"ib-testimonial--content"},!s.RichText.isEmpty(o)&&Object(r.createElement)(s.RichText.Content,{tagName:"p",value:o})),Object(r.createElement)("div",{className:"ib-testimonial--meta image-".concat(m)},a&&a.id&&Object(r.createElement)("div",{className:"ib-testimonial--image"},Object(r.createElement)("img",{src:a.url,alt:a.alt})),Object(r.createElement)("div",{className:"ib-testimonial--details"},Object(r.createElement)("div",{className:"ib-testimonial--name"},!s.RichText.isEmpty(l)&&Object(r.createElement)(s.RichText.Content,{tagName:"span",value:l})),Object(r.createElement)("div",{className:"ib-testimonial--title"},!s.RichText.isEmpty(c)&&Object(r.createElement)(s.RichText.Content,{tagName:"span",value:c})))))))},I={attributes:{}},B=i(5),A=(i(19),i(20),B.name),V=B.icon,U=B.category,H=B.keywords,J=B.supports;Object(n.registerBlockType)(A,{title:Object(o.__)("Testimonial","ib-testimonial"),description:Object(o.__)("A block to display testimonial on the site.","ib-testimonial"),icon:V,category:U,keywords:H,supports:J,attributes:a,edit:D,save:R,example:I,styles:[{name:"below-content",label:Object(o.__)("Style 1","ib-testimonial"),isDefault:!0},{name:"above-content",label:Object(o.__)("Style 2","ib-testimonial"),isDefault:!1},{name:"left-content",label:Object(o.__)("Style 3","ib-testimonial"),isDefault:!1},{name:"right-content",label:Object(o.__)("Style 4","ib-testimonial"),isDefault:!1}]})}]);