import { differenceData , differenceIcons} from "../../../localdata/difference"
import Icon from "./Icon/Icon"
import Heading from "../Execellents/child/Heading"

const Difference = () => {
    return (
        <div className='w-full py-5 mt-3'>
            <Heading heading={differenceData.heading} description={differenceData.description} />
            <div className='w-full flex justify-center mt-10'>
                <div className='w-[95%] flex justify-between items-center max-sm:flex-col'>
                    {
                        differenceIcons.map((items, index) => {
                            return <Icon key={index} data={items} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Difference