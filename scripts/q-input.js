const searchInput = document.getElementById('searchInput');
const searchSubmit = document.getElementById('searchSubmit');

searchSubmit.addEventListener('click', qVideo);

function qVideo(){
  let youtube = parseInput();
  if(!youtube) return;

  let videoObj = { id: youtube[1], h: youtube[3] || 0, m: youtube[4] || 0, s: youtube[5] || youtube[2] || 0 };

  player.cueVideoById(videoObj.id, (videoObj.h * 3600 + videoObj.m * 60 + videoObj.s|0));

  console.log('video queued');
}

function parseInput()
{
  return /youtu(?:\.be\/|be\.com\/(?:embed\/|.*v=))([\w-]+)(?:.*start=(\d+)|.*t=(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?)?/.exec(searchInput.value);
}
