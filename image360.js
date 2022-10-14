const html = `
<style>
      body {
        margin: 0;
      }
      .extendedh {
        width: 100%;
      }
      .extendedv {
        height: 100%;
      }
      #wrapper {
        background: #232226;
        height: 100%;
        width:100%;
        padding: 0;
      }
      .image360 {
        box-sizing: border-box;
        background-color: rgba(75, 75, 75, 0.5);
      }
  </style>
  <script src="https://rawcdn.githack.com/MozillaReality/immersive-custom-elements/v0.2.0/build/immersive-custom-elements.js"></script>
  <div id="wrapper"></div>
  <script>
  function initViewer(){
    let wrapper = document.getElementById('wrapper');
    wrapper.childNodes.item(0)) && wrapper.removeChild(wrapper.firstChild); 
    //add img-360 tag and set attr.
    let _tag = document.createElement('img-360');
    _tag.className = 'image360';
    _tag.setAttribute("height","300");
    _tag.setAttribute("width","400");
    return _tag
  }
  let viewer = initViewer();
  
  const cb = (block) => {
  viewer = initViewer();
  if (block && block.property && block.property.default && block.property.default.data1) {
    let data1 = ''+ block.property.default.data1;
    viewer.setAttribute("src",data1);
  }
  if (block && block.property && block.property.default && block.property.default.width) {
    let width = ''+ block.property.default.width;
    viewer.setAttribute("width",width);
    }
  if (block && block.property && block.property.default && block.property.default.height) {
    let height = ''+ block.property.default.height;
    viewer.setAttribute("height",height);
    }
  wrapper.appendChild(viewer);
};

addEventListener("message", e => {
  if (e.source !== parent) return;
  cb(e.data);
});

cb(${JSON.stringify(reearth.block)});
</script>
`;
reearth.ui.show(html);

reearth.on("update", () => {
  reearth.ui.postMessage(reearth.block);
});
