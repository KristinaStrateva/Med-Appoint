// import asyncHandler from 'express-async-handler';

import Doctor from '../models/Doctor';

const initializeDoctors = async () => {
    const existingDoctors = await Doctor.find();

    if (existingDoctors.length === 0) {
        await Doctor.create([
            { name: 'Dr. Louise Parker', medSpeciality: 'General Practice/GP', imageUrl: 'https://imgs.search.brave.com/Qm3_NopertyaN35Z0fmQZ4OSTajd58Yvg8m8_eFFADg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MjEzNDQyNS9waG90/by9wb3J0cmFpdC1v/Zi1jb25maWRlbnQt/bWlkLWFkdWx0LWZl/bWFsZS1kb2N0b3Iu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVuSV9EM2h0TXZM/aVMyOGl6ZWJXcGtF/TDVOTkhQWFJielNm/em5pWnBudk09' },
            { name: 'Dr. Megan Burnet', medSpeciality: 'General Practice/GP', imageUrl: 'https://imgs.search.brave.com/HbOvihb6qiSgMzgDr9ByjRmFMe-qHIiumnXeOwq2yJY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItcHJlcGFy/aW5nLWNvbnN1bHRf/MjMtMjE0OTMwOTk0/MS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw' },
            { name: 'Dr. Peter Strong', medSpeciality: 'General Practice/GP', imageUrl: 'https://imgs.search.brave.com/z8Yh5GeSEw0Ai3_1_pcdZ-9LbQKfBOvbjnOYdyPlxKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC15b3Vu/Zy1kb2N0b3ItaG9z/cGl0YWxfMjMtMjE0/ODM1MjAxMi5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw' },
            { name: 'Dr. Linda Murray', medSpeciality: 'Pediatrics', imageUrl: 'https://imgs.search.brave.com/iT6VvDeS22C2_0GuY5ay8f_laGowYXzhtmoG2ykich4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MjAwMjY1MC9waG90/by9jcm9wcGVkLXBv/cnRyYWl0LW9mLWFu/LWF0dHJhY3RpdmUt/eW91bmctZmVtYWxl/LWRvY3Rvci1zdGFu/ZGluZy13aXRoLWhl/ci1hcm1zLWZvbGRl/ZC1pbi10aGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW8x/UXRTdE5zb3dPVTBI/U29mNnhRX2paTWds/VThaSzU2NWdIZDY1/NVU2UzQ9' },
            { name: 'Dr. Paola Dhornan', medSpeciality: 'Pediatrics', imageUrl: 'https://imgs.search.brave.com/Y4W7QXlq5kQyYVdmoc1vGjf7LbEBpESrXJojr5Ay1n8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItdGFraW5n/LWNhcmUtcGF0aWVu/dC1hZnRlci12YWNj/aW5hdGlvbl8yMy0y/MTQ4ODgwNTM1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn' },
            { name: 'Dr. George Brown', medSpeciality: 'Orthopedics', imageUrl: 'https://imgs.search.brave.com/yKHmRBLbXwIQCufFcRSZWTvD-5skhMS8GjFcx7jK8Vk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYWxlLWRvY3Rv/ci1leHBsYWluaW5n/LXNwaW5lLXNlbmlv/ci1wYXRpZW50XzEz/MzM5LTI4NDIzNy5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw' },
            { name: 'Dr. Peter Davidson', medSpeciality: 'Neurology', imageUrl: 'https://imgs.search.brave.com/c7uALUzY1y2ygB6lnnthDPDgSehkOzLPzu04GkBRhSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MDQ4ODE5Mi9waG90/by9tYWxlcy1kb2N0/b3ItZXhhbWluaW5n/LWJyYWluLW1yLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Y/U0x6bjE1Um4yTE5R/X29HLW54U2Rjdklq/YmpUOTR0ZEdFZFVu/YlQ3d1RVPQ' },
            { name: 'Dr. Sarah Silverstone', medSpeciality: 'Neurology', imageUrl: 'https://imgs.search.brave.com/oBr04psGJWJMracxx_b8HGncMCjmN2lUDcIdsYy2cXI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjM5/MTA0MjEvc3RvY2st/cGhvdG8tZmVtYWxl/LWRvY3Rvci1hdC10/aGUtaG9zcGl0YWw' },
            { name: 'Dr. David Noah', medSpeciality: 'Cardiology', imageUrl: 'https://imgs.search.brave.com/swcj9aVCaotwVwjl3LIJD2V_cEuCWGpMj1oSVarXGFM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItZXhhbWlu/aW5nLWNoZXN0LXBh/dGllbnRfMjMtMjE0/Nzg5NjgwNS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw' },
            { name: 'Dr. Bill James', medSpeciality: 'Cardiology', imageUrl: 'https://imgs.search.brave.com/WooNiPEFicNOv9qSI7wpUa-XDfwN8_ldHpTPR1Nwnis/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/LXRyeWluZy1iZS1i/ZXN0LWRvY3Rvcl8z/MjkxODEtMjE4OC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw' },
            { name: 'Dr. Bethany Rose', medSpeciality: 'Dermatology', imageUrl: 'https://imgs.search.brave.com/cvZn_wKBmOYjlTo6MTTYffrTqij-mX-chKsUkjjYHO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/NzcyNjQ2L3Bob3Rv/L2hhcHB5LWRlcm1h/dG9sb2dpc3QtYXQt/aGVyLXByYWN0aWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1MT0JZenM2N3l1/ODFEUVYtdlh6aGl4/ZkRDTmJNTTVqbVhL/c0p0LUotazFVPQ' },
            { name: 'Dr. Linsey Williams', medSpeciality: 'Dermatology', imageUrl: 'https://imgs.search.brave.com/Nu5_F051ucoWHrlNb6BltdyMRx-xf9wlQGePPqbsP8M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzMwLzQ1LzU0/LzM2MF9GXzEzMDQ1/NTQwOV9mVHVpblBP/MUxYRUN2NWhsazlW/QlJFbkw2eW93WVVv/My5qcGc' },
            { name: 'Dr. Bob Grey', medSpeciality: 'Dermatology', imageUrl: 'https://imgs.search.brave.com/vqLlZjLg-t7h5V5nH8uvbiASdm66hLgDsFR2wGa_JlU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYWxlLWRvY3Rv/ci1wcm9mZXNzaW9u/YWwtaGVhbHRoLWNh/cmUtaG9zcGl0YWwt/c3RvY2stcGhvdG9f/MjE1MzcyLTcxNTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc' },
            { name: 'Dr. Mariah Susane', medSpeciality: 'Dermatology', imageUrl: 'https://imgs.search.brave.com/6Oq298ZZNXZVddgr6v_4E2fSD6HQJHFwLN61VhNJON0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/OTM3ODY5MC9waG90/by9jb25maWRlbnQt/ZmVtYWxlLWRvY3Rv/ci13aXRoLWFybXMt/Y3Jvc3NlZC1zdGFu/ZGluZy1pbi1ob3Nw/aXRhbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Q2J3UFY3/ek5GZmtxbkRDWWhh/QlhrTWNMd1lDQ1Bv/SlNkRmVHSnRiRzdQ/WT0' },
        ]);
    }
};

export default initializeDoctors;