import domtoimage from 'dom-to-image'


const DownloadButton = () => {
  const handleDownload = () => {
    console.log(`test`)
    // const node = document.getElementById('receipt')

    // console.log(node)

    // domtoimage
    //   //@ts-ignore
    //   .toPng(node)
    //   .then(function (dataUrl: string) {
    //     let img = new Image()
    //     img.src = dataUrl
    //     document.body.appendChild(img)
    //   })
    //   .catch(function (error: any) {
    //     console.error('oops, something went wrong!', error)
    //   })
  }

  return (
    <button
      onClick={handleDownload}
      type="button"
      className="flex items-center px-2 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
    >
      Download Image
    </button>
  )
}

export default DownloadButton
