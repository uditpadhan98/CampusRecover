import './list.scss'
import Card from"../card/Card"

function List({propertyList}){
  // console.log(propertyList);
  return (
    <div className='list'>
      {propertyList.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List