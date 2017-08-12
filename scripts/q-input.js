const searchInput = document.getElementById('searchInput');
const queue = [];

searchInput.onkeypress = function(e){
    if (e.keyCode == '13'){
      qVideo();
    }
  }

function qVideo(){
  let youtube = parseInput();
  if(!youtube) return;
  let videoObj = { id: youtube[1], h: youtube[3] || 0, m: youtube[4] || 0, s: youtube[5] || youtube[2] || 0 };
  queue.push(videoObj);
  console.log('video queued');
  searchInput.value='';
}

function parseInput()
{
  return /youtu(?:\.be\/|be\.com\/(?:embed\/|.*v=))([\w-]+)(?:.*start=(\d+)|.*t=(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?)?/.exec(searchInput.value);
}
