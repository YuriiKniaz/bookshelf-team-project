// const support = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: '/src/images/support/save-children.png',
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: '/src/images/support/hope.png',
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: '/src/images/support/united24.png',
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: '/src/images/support/medical-corps.png',
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: '/src/images/support/sans-frontiers.png',
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: '/src/images/support/razom.png',
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: '/src/images/support/against-hunger.png',
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: '/src/images/support/world-vision.png',
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: '/src/images/support/prytula.png',
//   },
// ];
// const supportContainer = document.querySelector('.support-container');

// const supportHeaderContainer = document.createElement('div');
// supportHeaderContainer.className = 'support-header-container';

// const supportHeader = document.createElement('h3');
// supportHeader.className = 'support-hedder';
// supportHeader.textContent = 'Support Ukraine';

// const scrollButtonContainer = document.createElement('div');
// scrollButtonContainer.className = 'scroll-button-container';

// const scrollButton = document.createElement('button');
// scrollButton.className = 'scroll-button';
// scrollButton.type = 'button';

// // Вставьте ваш SVG path вместо '...'
// const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
// svgPath.setAttribute(
//   'd',
//   '"M9.00548 30.8877C7.26703 29.6252 6.0141 27.7313 5.59123 25.5369H0V2.41992C2.99139 3.86285 5.1527 7.01926 5.38763 10.2959L6.23336 16.7891L5.82615 16.744C4.93344 16.744 4.15035 17.5557 4.15035 18.3523C4.15035 19.1038 4.7455 19.7351 5.52858 19.9004L6.54659 20.1259C8.2224 17.0747 9.17776 14.0836 9.17776 11.1527C9.17776 8.50728 8.81754 5.86191 8.75489 3.15641C8.75489 1.95397 9.24041 0.85674 10.0078 0C10.7909 0.85674 11.2608 1.95397 11.2608 3.15641C11.2608 5.86191 10.8379 8.50728 10.8379 11.1527C10.8379 14.0836 11.7933 17.0747 13.4691 20.1259L14.4871 19.9004C15.2702 19.7351 15.8653 19.0888 15.8653 18.3523C15.8653 17.5406 15.0822 16.744 14.1895 16.744L13.7666 16.8041L14.6124 10.3109C15.0352 7.03429 17.0086 3.86285 20 2.43495V25.5519H14.4244C14.0016 27.7313 12.8113 29.7003 11.0102 30.9028C10.5873 31.1884 10.2271 31.5341 9.99217 32C9.77291 31.5341 9.41269 31.1884 9.00548 30.8877ZM2.64683 17.5557C2.88175 16.6989 3.53955 15.9474 4.38528 15.4814L3.72749 10.1306C3.49256 8.46219 2.77212 6.97417 1.69146 5.75669V17.5406H2.64683V17.5557ZM5.46593 23.9286C5.46593 23.117 5.59123 22.3805 5.76351 21.6289L4.98042 21.4486C3.83712 21.1029 2.9444 20.2461 2.64683 19.1489H1.69146V23.9286H5.46593ZM9.17776 23.9286C9.17776 22.9516 8.39467 22.0949 7.37666 21.9746C7.20438 22.6059 7.07909 23.2372 7.07909 23.9286H9.17776ZM9.17776 25.5519H7.31402C7.61159 26.8145 8.26938 27.9718 9.17776 28.9488V25.5519ZM11.8089 20.5467C11.0885 19.2842 10.4307 17.9615 10.0078 16.5787C9.58496 17.9615 8.92717 19.2842 8.20673 20.5467C8.92717 20.7121 9.52232 21.178 10.0078 21.7041C10.4933 21.178 11.0885 20.7121 11.8089 20.5467ZM12.9522 23.9286C12.9522 23.2372 12.8269 22.6059 12.6547 21.9746C11.6366 22.0949 10.8536 22.9516 10.8536 23.9286H12.9522ZM12.7173 25.5519H10.8536V28.9488C11.7619 27.9568 12.4197 26.8145 12.7173 25.5519ZM18.3399 23.9286V19.1489H17.3845C17.0869 20.2461 16.1785 21.1029 15.0509 21.4486L14.2678 21.6289C14.4401 22.3805 14.5654 23.117 14.5654 23.9286H18.3399ZM18.3399 17.5557V5.75669C17.2592 6.95914 16.4761 8.46219 16.3038 10.1306L15.646 15.4814C16.4918 15.9474 17.1496 16.6839 17.3845 17.5557H18.3399Z"'
// );

// scrollButton.appendChild(svgPath);
// scrollButtonContainer.appendChild(scrollButton);
// supportHeaderContainer.appendChild(supportHeader);
// supportHeaderContainer.appendChild(scrollButtonContainer);

// supportContainer.appendChild(supportHeaderContainer);

// // Добавляем список элементов
// const supportList = document.createElement('ul');
// supportList.className = 'support-list';

// support.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.className = 'support-item';

//   const itemNumber = document.createElement('span');
//   itemNumber.textContent = item.title;

//   const link = document.createElement('a');
//   link.href = item.url;

//   const img = document.createElement('img');
//   img.src = item.img;
//   img.alt = item.title;
//   img.height = 32;

//   link.appendChild(img);
//   listItem.appendChild(itemNumber);
//   listItem.appendChild(link);
//   supportList.appendChild(listItem);
// });

// supportContainer.appendChild(supportList);

// // Взаимодействие с кнопкой для прокрутки
// const scrollButton = document.querySelector('.scroll-button');
// const items = document.querySelectorAll('.support-item');
// const itemHeight = items[0].offsetHeight;
// let scrollTop = 0;

// scrollButton.addEventListener('click', () => {
//   scrollTop = (scrollTop + itemHeight) % (items.length * itemHeight);
//   supportList.scrollTop = scrollTop;
// });
