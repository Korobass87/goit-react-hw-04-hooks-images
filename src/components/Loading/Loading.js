import React from 'react'
import { TailSpin } from  'react-loader-spinner'





export default function Loading() {
  return (
    <div className='wrap'><TailSpin color="blue"/></div>
)
}


// export default class Loading extends Component {
//   render() {
//     return (
//         <div className='wrap'><TailSpin color="blue"/></div>
//     )
//   }
// }
