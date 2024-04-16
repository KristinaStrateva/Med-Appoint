import { Component } from '@angular/core';
import { CarouselImage } from 'src/app/types/carouselImage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // Have to take this data from the server by getting all the doctors and their info
  images: CarouselImage[] = [
    {imageUrl: 'https://imgs.search.brave.com/Qm3_NopertyaN35Z0fmQZ4OSTajd58Yvg8m8_eFFADg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MjEzNDQyNS9waG90/by9wb3J0cmFpdC1v/Zi1jb25maWRlbnQt/bWlkLWFkdWx0LWZl/bWFsZS1kb2N0b3Iu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVuSV9EM2h0TXZM/aVMyOGl6ZWJXcGtF/TDVOTkhQWFJielNm/em5pWnBudk09', imageData: 'General Practice/GP'},
    {imageUrl: 'https://imgs.search.brave.com/Y4W7QXlq5kQyYVdmoc1vGjf7LbEBpESrXJojr5Ay1n8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItdGFraW5n/LWNhcmUtcGF0aWVu/dC1hZnRlci12YWNj/aW5hdGlvbl8yMy0y/MTQ4ODgwNTM1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn', imageData: 'Pediatrics'},
    {imageUrl: 'https://imgs.search.brave.com/yKHmRBLbXwIQCufFcRSZWTvD-5skhMS8GjFcx7jK8Vk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYWxlLWRvY3Rv/ci1leHBsYWluaW5n/LXNwaW5lLXNlbmlv/ci1wYXRpZW50XzEz/MzM5LTI4NDIzNy5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw', imageData: 'Orthopedics'},
    {imageUrl: 'https://imgs.search.brave.com/c7uALUzY1y2ygB6lnnthDPDgSehkOzLPzu04GkBRhSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MDQ4ODE5Mi9waG90/by9tYWxlcy1kb2N0/b3ItZXhhbWluaW5n/LWJyYWluLW1yLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Y/U0x6bjE1Um4yTE5R/X29HLW54U2Rjdklq/YmpUOTR0ZEdFZFVu/YlQ3d1RVPQ', imageData: 'Neurology'},
    {imageUrl: 'https://imgs.search.brave.com/swcj9aVCaotwVwjl3LIJD2V_cEuCWGpMj1oSVarXGFM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItZXhhbWlu/aW5nLWNoZXN0LXBh/dGllbnRfMjMtMjE0/Nzg5NjgwNS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw', imageData: 'Cardiology'},
    {imageUrl: 'https://imgs.search.brave.com/cvZn_wKBmOYjlTo6MTTYffrTqij-mX-chKsUkjjYHO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/NzcyNjQ2L3Bob3Rv/L2hhcHB5LWRlcm1h/dG9sb2dpc3QtYXQt/aGVyLXByYWN0aWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1MT0JZenM2N3l1/ODFEUVYtdlh6aGl4/ZkRDTmJNTTVqbVhL/c0p0LUotazFVPQ', imageData: 'Dermatology'},
  ]
}
