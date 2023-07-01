import React, { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'

export default function TopLoadingBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(100);
  }, [])

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
}
