import './style.scss';
fetch('https://fakestoreapi.com/products?limit=8')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const container: HTMLElement | null = document.getElementById('app');

    data.forEach(
      (item: {
        image: string;
        title: string;
        description: string | null;
        price: any;
        rating: { rate: number };
      }) => {
        const ul = document.createElement('ul');
        ul.className = 'content';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('h6');
        price.textContent = `$${item.price}`;

        const starsUl = document.createElement('ul');
        starsUl.id = 'star';
        for (let i = 1; i <= 5; i++) {
          const starLi = document.createElement('li');
          const starIcon = document.createElement('i');
          starIcon.className = 'fa fa-star';
          if (i <= item.rating.rate) {
            starIcon.classList.add('checked');
          }
          starLi.appendChild(starIcon);
          starsUl.appendChild(starLi);
        }

        const btn = document.createElement('button');
        btn.className = 'buy';
        btn.textContent = 'Buy Now';

        ul.appendChild(img);
        ul.appendChild(title);
        ul.appendChild(description);
        ul.appendChild(price);
        ul.appendChild(starsUl);
        ul.appendChild(btn);
        if (container) container.appendChild(ul);
      }
    );
  })
  .catch(error => console.error('Error:', error));
