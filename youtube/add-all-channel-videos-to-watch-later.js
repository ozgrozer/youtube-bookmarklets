/*
  1. Open the console in developer tools to toggle device toolbar.
  2. Make sure to select one of the mobile devices at the top of the page.
  3. Go to the "Videos" section of any channel. (https://m.youtube.com/user/GoProCamera/videos?sort=da)
  4. Scroll down until the "Show More" button disappears.
  5. Copy the codes below and run in the console.
*/

const interval = 1000
const videos = document.querySelectorAll('ytm-compact-video-renderer.item')
const totalVideos = videos.length
const totalSeconds = (interval * totalVideos) / 1000

if (window.confirm(`Add ${totalVideos} videos in ${totalSeconds} seconds?`)) {
  for (let i = 0; i < totalVideos; i++) {
    setTimeout(j => {
      const video = videos[j]

      const openModalButton = video.querySelectorAll('.icon-button')[0]
      openModalButton.click()

      const saveToWatchLaterButton = document.querySelectorAll('.menu-item-button')[0]
      saveToWatchLaterButton.click()

      const left = totalVideos - j - 1
      console.log(left + ' left.')

      if (left === 0) console.log('Done.')
    }, interval * i, i)
  }
}
