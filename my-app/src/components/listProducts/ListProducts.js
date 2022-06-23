

export const ListProducts = ({products}) => (
<ul>
          {
          products.length > 0
          ?
          products.map((product, key) => <li key={key}>{product}</li>)
          :

          <li>Продуктов нет</li>
          
          }
</ul>
)