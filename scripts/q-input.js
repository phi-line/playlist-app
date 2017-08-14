const searchInput = document.getElementById('searchInput');
const queue = [];
const preview = [];
const apiKey='AIzaSyD24VdpNyV15o1uqGKFSNNCrJWhaRiU60U';

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
  getVideoDetails(youtube[1]);
  searchInput.value='';
}

function parseInput()
{
  return /youtu(?:\.be\/|be\.com\/(?:embed\/|.*v=))([\w-]+)(?:.*start=(\d+)|.*t=(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?)?/.exec(searchInput.value);
}

function getVideoDetails(id)
{
  fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id='+id+'&key='+apiKey, {method: 'GET'}).then((resp) => resp.json())
  .then(function(data)
  {
    console.log('found video');
    console.log(data);
    console.log(data.items[0].snippet.thumbnails.standard.url);
    preview.push({thumbnail: data.items[0].snippet.thumbnails.standard.url, title: data.items[0].snippet.localized.title});
    console.log(preview);
    return;
  });
}
