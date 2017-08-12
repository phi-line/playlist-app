const searchInput = document.getElementById('searchInput');
const searchSubmit = document.getElementById('searchSubmit');
const queue = [];

searchSubmit.addEventListener('click', qVideo);

function qVideo(){
  let youtube = parseInput();
  if(!youtube) return;

  let videoObj = { id: youtube[1], h: youtube[3] || 0, m: youtube[4] || 0, s: youtube[5] || youtube[2] || 0 };

  queue.push(videoObj);

  console.log('video queued');
}

function parseInput()
{
  return /youtu(?:\.be\/|be\.com\/(?:embed\/|.*v=))([\w-]+)(?:.*start=(\d+)|.*t=(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?)?/.exec(searchInput.value);
}
