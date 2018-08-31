import * as React from 'react';

export const getNSTrainingLogo = (
  primaryColor: string,
  secondaryColor: string
) => {
  return (
    <div className="nstraining-logo-wrapper">
      <svg className="nstraining-logo-1" viewBox="0 0 226 20">
        <g id="Page-1" fill="none">
          <g id="Group" transform="translate(0.000000, -4.000000)">
            <g id="Group-2" transform="translate(29.000000, 0.000000)">
              <path
                d="M9.486,6.4 L12.06,6.4 L12.06,19 L9.09,19 L3.618,10.18 L3.852,13.726 L3.852,19 L1.278,19 L1.278,6.4 L4.23,6.4 L9.72,15.22 L9.486,11.674 L9.486,6.4 Z M21.762,9.1 L24.336,9.1 L24.318,19 L21.744,19 L21.744,17.668 C21.3959983,18.1480024 20.9580026,18.5259986 20.43,18.802 C19.9019974,19.0780014 19.3080033,19.216 18.648,19.216 C18.0119968,19.216 17.4180028,19.0900013 16.866,18.838 C16.3139972,18.5859987 15.834002,18.2290023 15.426,17.767 C15.017998,17.3049977 14.7000011,16.7530032 14.472,16.111 C14.2439989,15.4689968 14.13,14.7820037 14.13,14.05 C14.13,13.3059963 14.2439989,12.6160032 14.472,11.98 C14.7000011,11.3439968 15.017998,10.7950023 15.426,10.333 C15.834002,9.87099769 16.3139972,9.51400126 16.866,9.262 C17.4180028,9.00999874 18.0059969,8.884 18.63,8.884 C19.2900033,8.884 19.8899973,9.02799856 20.43,9.316 C20.9700027,9.60400144 21.4139983,9.99399754 21.762,10.486 L21.762,9.1 Z M19.224,16.768 C19.9560037,16.768 20.5619976,16.5160025 21.042,16.012 C21.5220024,15.5079975 21.762,14.854004 21.762,14.05 C21.762,13.257996 21.5190024,12.6070026 21.033,12.097 C20.5469976,11.5869974 19.9440036,11.332 19.224,11.332 C18.5039964,11.332 17.9070024,11.5839975 17.433,12.088 C16.9589976,12.5920025 16.722,13.245996 16.722,14.05 C16.722,14.854004 16.9589976,15.5079975 17.433,16.012 C17.9070024,16.5160025 18.5039964,16.768 19.224,16.768 Z M33.75,16.336 L34.182,18.424 C33.8819985,18.628001 33.4500028,18.8109992 32.886,18.973 C32.3219972,19.1350008 31.7700027,19.216 31.23,19.216 C30.4499961,19.216 29.7840028,19.0480017 29.232,18.712 C28.6799972,18.3759983 28.2570015,17.9170029 27.963,17.335 C27.6689985,16.7529971 27.522,16.0360043 27.522,15.184 L27.522,11.53 L25.758,11.53 L25.758,9.1 L27.522,9.1 L27.522,6.958 L30.096,6.4 L30.096,9.1 L33.768,9.1 L33.768,11.53 L30.096,11.53 L30.096,15.04 C30.096,15.6160029 30.2339986,16.0569985 30.51,16.363 C30.7860014,16.6690015 31.1759975,16.822 31.68,16.822 C32.1480023,16.822 32.8379954,16.6600016 33.75,16.336 Z M37.152,4.528 C37.6080023,4.528 37.9889985,4.67199856 38.295,4.96 C38.6010015,5.24800144 38.754,5.60799784 38.754,6.04 C38.754,6.47200216 38.6010015,6.83499853 38.295,7.129 C37.9889985,7.42300147 37.6080023,7.57 37.152,7.57 C36.7079978,7.57 36.3300016,7.42300147 36.018,7.129 C35.7059984,6.83499853 35.55,6.47200216 35.55,6.04 C35.55,5.60799784 35.7059984,5.24800144 36.018,4.96 C36.3300016,4.67199856 36.7079978,4.528 37.152,4.528 Z M35.856,19 L35.856,9.1 L38.43,9.1 L38.43,19 L35.856,19 Z M47.016,9.1 L49.752,9.1 L46.35,19 L43.272,19 L39.87,9.1 L42.606,9.1 L44.802,16.21 L47.016,9.1 Z M56.106,8.884 C56.898004,8.884 57.6239967,9.0339985 58.284,9.334 C58.9440033,9.6340015 59.4989977,10.0509973 59.949,10.585 C60.3990022,11.1190027 60.7289989,11.7429964 60.939,12.457 C61.149001,13.1710036 61.2240003,13.923996 61.164,14.716 L53.568,14.716 C53.6520004,15.4960039 53.9369976,16.086998 54.423,16.489 C54.9090024,16.891002 55.4819967,17.092 56.142,17.092 C56.6340025,17.092 57.080998,16.9810011 57.483,16.759 C57.885002,16.5369989 58.1699992,16.2340019 58.338,15.85 L61.002,15.85 C60.8699993,16.2700021 60.6750013,16.683998 60.417,17.092 C60.1589987,17.500002 59.829002,17.8599984 59.427,18.172 C59.024998,18.4840016 58.5480028,18.735999 57.996,18.928 C57.4439972,19.120001 56.8320034,19.216 56.16,19.216 C55.4159963,19.216 54.7200032,19.0870013 54.072,18.829 C53.4239968,18.5709987 52.8660023,18.2110023 52.398,17.749 C51.9299977,17.2869977 51.5700013,16.7380032 51.318,16.102 C51.0659987,15.4659968 50.94,14.7880036 50.94,14.068 C50.94,13.3479964 51.0659987,12.6670032 51.318,12.025 C51.5700013,11.3829968 51.9269977,10.8280023 52.389,10.36 C52.8510023,9.89199766 53.4029968,9.52900129 54.045,9.271 C54.6870032,9.01299871 55.3739963,8.884 56.106,8.884 Z M56.088,11.008 C55.487997,11.008 54.9810021,11.1759983 54.567,11.512 C54.1529979,11.8480017 53.8620008,12.2859973 53.694,12.826 L58.428,12.826 C58.3199995,12.429998 58.1370013,12.0820015 57.879,11.782 C57.6209987,11.4819985 57.3300016,11.2780005 57.006,11.17 C56.6819984,11.0619995 56.3760014,11.008 56.088,11.008 Z M67.77,11.314 C69.1500069,11.6140015 70.1789966,11.9199984 70.857,12.232 C71.5350034,12.5440016 72.0359984,12.9399976 72.36,13.42 C72.6840016,13.9000024 72.846,14.5179962 72.846,15.274 C72.846,15.9580034 72.7020014,16.5579974 72.414,17.074 C72.1259986,17.5900026 71.7480023,18.0039984 71.28,18.316 C70.8119977,18.6280016 70.2960028,18.8559993 69.732,19 C69.1679972,19.1440007 68.6100028,19.216 68.058,19.216 C67.4099968,19.216 66.7650032,19.1380008 66.123,18.982 C65.4809968,18.8259992 64.9140025,18.5680018 64.422,18.208 C63.9299975,17.8479982 63.5220016,17.3950027 63.198,16.849 C62.8739984,16.3029973 62.6640005,15.6700036 62.568,14.95 L65.16,14.95 C65.3400009,15.5860032 65.6519978,16.0569985 66.096,16.363 C66.5400022,16.6690015 67.1879957,16.822 68.04,16.822 C68.7480035,16.822 69.2939981,16.6930013 69.678,16.435 C70.0620019,16.1769987 70.254,15.8260022 70.254,15.382 C70.254,15.2139992 70.2210003,15.0670006 70.155,14.941 C70.0889997,14.8149994 69.9810007,14.7010005 69.831,14.599 C69.6809992,14.4969995 69.4620014,14.4010005 69.174,14.311 C68.8859986,14.2209996 68.2140053,14.0620011 67.158,13.834 C66.1739951,13.629999 65.385003,13.3840014 64.791,13.096 C64.196997,12.8079986 63.7320017,12.4270024 63.396,11.953 C63.0599983,11.4789976 62.892,10.8760037 62.892,10.144 C62.892,9.67599766 62.9789991,9.20500237 63.153,8.731 C63.3270009,8.25699763 63.6449977,7.8100021 64.107,7.39 C64.5690023,6.9699979 65.1239968,6.66400096 65.772,6.472 C66.4200032,6.27999904 67.043997,6.184 67.644,6.184 C68.652005,6.184 69.5069965,6.33999844 70.209,6.652 C70.9110035,6.96400156 71.4749979,7.40499715 71.901,7.975 C72.3270021,8.54500285 72.5999994,9.2499958 72.72,10.09 L70.11,10.09 C69.7979984,9.08199496 68.9820066,8.578 67.662,8.578 C66.9419964,8.578 66.3990018,8.71599862 66.033,8.992 C65.6669982,9.26800138 65.484,9.6159979 65.484,10.036 C65.484,10.2040008 65.5349995,10.3659992 65.637,10.522 C65.7390005,10.6780008 65.9489984,10.8129994 66.267,10.927 C66.5850016,11.0410006 67.0859966,11.1699993 67.77,11.314 Z M79.452,19.216 C78.7319964,19.216 78.0540032,19.0870013 77.418,18.829 C76.7819968,18.5709987 76.2330023,18.2050024 75.771,17.731 C75.3089977,17.2569976 74.9490013,16.7020032 74.691,16.066 C74.4329987,15.4299968 74.304,14.7580035 74.304,14.05 C74.304,13.3419965 74.4329987,12.6700032 74.691,12.034 C74.9490013,11.3979968 75.3089977,10.8430024 75.771,10.369 C76.2330023,9.89499763 76.7849968,9.52900129 77.427,9.271 C78.0690032,9.01299871 78.7499964,8.884 79.47,8.884 C80.070003,8.884 80.6459972,8.9739991 81.198,9.154 C81.7500028,9.3340009 82.2509977,9.59499829 82.701,9.937 C83.1510022,10.2790017 83.5229985,10.7019975 83.817,11.206 C84.1110015,11.7100025 84.3059995,12.261997 84.402,12.862 L81.756,12.862 C81.6839996,12.6099987 81.5550009,12.3580013 81.369,12.106 C81.1829991,11.8539987 80.9190017,11.6500008 80.577,11.494 C80.2349983,11.3379992 79.866002,11.26 79.47,11.26 C78.6899961,11.26 78.0660023,11.5209974 77.598,12.043 C77.1299977,12.5650026 76.9019999,13.2339959 76.914,14.05 C76.914,14.3500015 76.9529996,14.6589984 77.031,14.977 C77.1090004,15.2950016 77.249999,15.5919986 77.454,15.868 C77.658001,16.1440014 77.9249983,16.3749991 78.255,16.561 C78.5850016,16.7470009 78.9839977,16.84 79.452,16.84 C80.0040028,16.84 80.4899979,16.6990014 80.91,16.417 C81.3300021,16.1349986 81.6119993,15.7360026 81.756,15.22 L84.402,15.22 C84.3299996,15.6880023 84.1830011,16.1589976 83.961,16.633 C83.7389989,17.1070024 83.3940023,17.5569979 82.926,17.983 C82.4579977,18.4090021 81.9090031,18.720999 81.279,18.919 C80.6489968,19.117001 80.0400029,19.216 79.452,19.216 Z M91.71,8.884 L92.286,8.92 L92.286,11.566 L91.656,11.53 C90.6239948,11.53 89.8590025,11.7999973 89.361,12.34 C88.8629975,12.8800027 88.614,13.6299952 88.614,14.59 L88.614,19 L86.04,19 L86.04,9.1 L88.614,9.1 L88.614,10.828 C88.9140015,10.1919968 89.3309973,9.70900165 89.865,9.379 C90.3990027,9.04899835 91.0139965,8.884 91.71,8.884 Z M94.986,4.528 C95.4420023,4.528 95.8229985,4.67199856 96.129,4.96 C96.4350015,5.24800144 96.588,5.60799784 96.588,6.04 C96.588,6.47200216 96.4350015,6.83499853 96.129,7.129 C95.8229985,7.42300147 95.4420023,7.57 94.986,7.57 C94.5419978,7.57 94.1640016,7.42300147 93.852,7.129 C93.5399984,6.83499853 93.384,6.47200216 93.384,6.04 C93.384,5.60799784 93.5399984,5.24800144 93.852,4.96 C94.1640016,4.67199856 94.5419978,4.528 94.986,4.528 Z M93.69,19 L93.69,9.1 L96.264,9.1 L96.264,19 L93.69,19 Z M104.13,8.884 C104.754003,8.884 105.341997,9.00999874 105.894,9.262 C106.446003,9.51400126 106.928998,9.87099769 107.343,10.333 C107.757002,10.7950023 108.077999,11.3439968 108.306,11.98 C108.534001,12.6160032 108.648,13.3059963 108.648,14.05 C108.648,14.7820037 108.534001,15.4689968 108.306,16.111 C108.077999,16.7530032 107.760002,17.3049977 107.352,17.767 C106.943998,18.2290023 106.461003,18.5859987 105.903,18.838 C105.344997,19.0900013 104.754003,19.216 104.13,19.216 C102.821993,19.216 101.778004,18.7000052 100.998,17.668 L100.998,23.5 L98.424,23.5 L98.424,9.1 L100.998,9.1 L100.998,10.486 C101.346002,9.99399754 101.789997,9.60400144 102.33,9.316 C102.870003,9.02799856 103.469997,8.884 104.13,8.884 Z M103.536,16.768 C104.256004,16.768 104.852998,16.5160025 105.327,16.012 C105.801002,15.5079975 106.038,14.854004 106.038,14.05 C106.038,13.245996 105.801002,12.5920025 105.327,12.088 C104.852998,11.5839975 104.256004,11.332 103.536,11.332 C102.815996,11.332 102.213002,11.5869974 101.727,12.097 C101.240998,12.6070026 100.998,13.257996 100.998,14.05 C100.998,14.854004 101.237998,15.5079975 101.718,16.012 C102.198002,16.5160025 102.803996,16.768 103.536,16.768 Z M117.81,16.336 L118.242,18.424 C117.941998,18.628001 117.510003,18.8109992 116.946,18.973 C116.381997,19.1350008 115.830003,19.216 115.29,19.216 C114.509996,19.216 113.844003,19.0480017 113.292,18.712 C112.739997,18.3759983 112.317001,17.9170029 112.023,17.335 C111.728999,16.7529971 111.582,16.0360043 111.582,15.184 L111.582,11.53 L109.818,11.53 L109.818,9.1 L111.582,9.1 L111.582,6.958 L114.156,6.4 L114.156,9.1 L117.828,9.1 L117.828,11.53 L114.156,11.53 L114.156,15.04 C114.156,15.6160029 114.293999,16.0569985 114.57,16.363 C114.846001,16.6690015 115.235997,16.822 115.74,16.822 C116.208002,16.822 116.897995,16.6600016 117.81,16.336 Z"
                id="NativeScript"
                fill={primaryColor}
              />
              <path
                d="M133.332,6.4 L133.332,8.848 L129.696,8.848 L129.696,19 L127.122,19 L127.122,8.848 L123.504,8.848 L123.504,6.4 L133.332,6.4 Z M140.532,8.884 L141.108,8.92 L141.108,11.566 L140.478,11.53 C139.445995,11.53 138.681002,11.7999973 138.183,12.34 C137.684998,12.8800027 137.436,13.6299952 137.436,14.59 L137.436,19 L134.862,19 L134.862,9.1 L137.436,9.1 L137.436,10.828 C137.736002,10.1919968 138.152997,9.70900165 138.687,9.379 C139.221003,9.04899835 139.835997,8.884 140.532,8.884 Z M149.91,9.1 L152.484,9.1 L152.466,19 L149.892,19 L149.892,17.668 C149.543998,18.1480024 149.106003,18.5259986 148.578,18.802 C148.049997,19.0780014 147.456003,19.216 146.796,19.216 C146.159997,19.216 145.566003,19.0900013 145.014,18.838 C144.461997,18.5859987 143.982002,18.2290023 143.574,17.767 C143.165998,17.3049977 142.848001,16.7530032 142.62,16.111 C142.391999,15.4689968 142.278,14.7820037 142.278,14.05 C142.278,13.3059963 142.391999,12.6160032 142.62,11.98 C142.848001,11.3439968 143.165998,10.7950023 143.574,10.333 C143.982002,9.87099769 144.461997,9.51400126 145.014,9.262 C145.566003,9.00999874 146.153997,8.884 146.778,8.884 C147.438003,8.884 148.037997,9.02799856 148.578,9.316 C149.118003,9.60400144 149.561998,9.99399754 149.91,10.486 L149.91,9.1 Z M147.372,16.768 C148.104004,16.768 148.709998,16.5160025 149.19,16.012 C149.670002,15.5079975 149.91,14.854004 149.91,14.05 C149.91,13.257996 149.667002,12.6070026 149.181,12.097 C148.694998,11.5869974 148.092004,11.332 147.372,11.332 C146.651996,11.332 146.055002,11.5839975 145.581,12.088 C145.106998,12.5920025 144.87,13.245996 144.87,14.05 C144.87,14.854004 145.106998,15.5079975 145.581,16.012 C146.055002,16.5160025 146.651996,16.768 147.372,16.768 Z M155.832,4.528 C156.288002,4.528 156.668998,4.67199856 156.975,4.96 C157.281002,5.24800144 157.434,5.60799784 157.434,6.04 C157.434,6.47200216 157.281002,6.83499853 156.975,7.129 C156.668998,7.42300147 156.288002,7.57 155.832,7.57 C155.387998,7.57 155.010002,7.42300147 154.698,7.129 C154.385998,6.83499853 154.23,6.47200216 154.23,6.04 C154.23,5.60799784 154.385998,5.24800144 154.698,4.96 C155.010002,4.67199856 155.387998,4.528 155.832,4.528 Z M154.536,19 L154.536,9.1 L157.11,9.1 L157.11,19 L154.536,19 Z M164.832,8.884 C165.948006,8.884 166.823997,9.23199652 167.46,9.928 C168.096003,10.6240035 168.414,11.5779939 168.414,12.79 L168.414,19 L165.84,19 L165.84,13.348 C165.84,12.6879967 165.693001,12.1870017 165.399,11.845 C165.104999,11.5029983 164.634003,11.332 163.986,11.332 C163.253996,11.332 162.699002,11.5419979 162.321,11.962 C161.942998,12.3820021 161.754,12.993996 161.754,13.798 L161.754,19 L159.18,19 L159.18,9.1 L161.754,9.1 L161.754,10.45 C162.498004,9.40599478 163.523993,8.884 164.832,8.884 Z M171.672,4.528 C172.128002,4.528 172.508998,4.67199856 172.815,4.96 C173.121002,5.24800144 173.274,5.60799784 173.274,6.04 C173.274,6.47200216 173.121002,6.83499853 172.815,7.129 C172.508998,7.42300147 172.128002,7.57 171.672,7.57 C171.227998,7.57 170.850002,7.42300147 170.538,7.129 C170.225998,6.83499853 170.07,6.47200216 170.07,6.04 C170.07,5.60799784 170.225998,5.24800144 170.538,4.96 C170.850002,4.67199856 171.227998,4.528 171.672,4.528 Z M170.376,19 L170.376,9.1 L172.95,9.1 L172.95,19 L170.376,19 Z M180.672,8.884 C181.788006,8.884 182.663997,9.23199652 183.3,9.928 C183.936003,10.6240035 184.254,11.5779939 184.254,12.79 L184.254,19 L181.68,19 L181.68,13.348 C181.68,12.6879967 181.533001,12.1870017 181.239,11.845 C180.944999,11.5029983 180.474003,11.332 179.826,11.332 C179.093996,11.332 178.539002,11.5419979 178.161,11.962 C177.782998,12.3820021 177.594,12.993996 177.594,13.798 L177.594,19 L175.02,19 L175.02,9.1 L177.594,9.1 L177.594,10.45 C178.338004,9.40599478 179.363993,8.884 180.672,8.884 Z M193.614,9.1 L196.188,9.1 L196.188,18.874 C196.188,19.5940036 196.074001,20.253997 195.846,20.854 C195.617999,21.454003 195.288002,21.9669979 194.856,22.393 C194.423998,22.8190021 193.905003,23.1459989 193.299,23.374 C192.692997,23.6020011 192.024004,23.716 191.292,23.716 C190.691997,23.716 190.110003,23.6380008 189.546,23.482 C188.981997,23.3259992 188.469002,23.0890016 188.007,22.771 C187.544998,22.4529984 187.164002,22.0540024 186.864,21.574 C186.563999,21.0939976 186.366,20.5420031 186.27,19.918 L188.934,19.918 C188.994,20.1700013 189.116999,20.4189988 189.303,20.665 C189.489001,20.9110012 189.752998,21.0999993 190.095,21.232 C190.437002,21.3640007 190.811998,21.43 191.22,21.43 C192.816008,21.43 193.614,20.6020083 193.614,18.946 L193.614,17.524 C193.253998,18.0040024 192.810003,18.3819986 192.282,18.658 C191.753997,18.9340014 191.160003,19.072 190.5,19.072 C189.875997,19.072 189.285003,18.9460013 188.727,18.694 C188.168997,18.4419987 187.686002,18.0880023 187.278,17.632 C186.869998,17.1759977 186.552001,16.6330032 186.324,16.003 C186.095999,15.3729968 185.982,14.6980036 185.982,13.978 C185.982,13.4379973 186.047999,12.9190025 186.18,12.421 C186.312001,11.9229975 186.497999,11.470002 186.738,11.062 C186.978001,10.653998 187.295998,10.2730018 187.692,9.919 C188.088002,9.56499823 188.540997,9.30400084 189.051,9.136 C189.561003,8.96799916 190.043998,8.884 190.5,8.884 C191.148003,8.884 191.741997,9.02499859 192.282,9.307 C192.822003,9.58900141 193.265998,9.97599754 193.614,10.468 L193.614,9.1 Z M191.076,16.624 C191.796004,16.624 192.398998,16.3750025 192.885,15.877 C193.371002,15.3789975 193.614,14.7460038 193.614,13.978 C193.614,13.2099962 193.371002,12.5770025 192.885,12.079 C192.398998,11.5809975 191.796004,11.332 191.076,11.332 C190.355996,11.332 189.759002,11.5809975 189.285,12.079 C188.810998,12.5770025 188.574,13.2099962 188.574,13.978 C188.574,14.7460038 188.813998,15.3789975 189.294,15.877 C189.774002,16.3750025 190.367996,16.624 191.076,16.624 Z"
                id="Training"
                fill={secondaryColor}
              />
            </g>
            <g
              id="gradhat"
              transform="translate(0.000000, 6.000000)"
              fill="#6664D4"
            >
              <path
                d="M18.477551,7.37557392 L18.6636735,10.6666667 C18.6906122,11.1466177 18.4065306,11.5898378 17.8089796,11.9987756 C17.2114286,12.4077135 16.3959184,12.7333946 15.36,12.9733701 C14.3265306,13.2133456 13.204898,13.3333333 11.995102,13.3333333 C10.7877551,13.3333333 9.66612245,13.2133456 8.63020408,12.9733701 C7.59673469,12.7333946 6.77877551,12.4101622 6.18122449,11.9987756 C5.58367347,11.5898378 5.29959184,11.144169 5.32653061,10.6666667 L5.51265306,7.37557392 L11.4930612,9.26109581 C11.644898,9.3100704 11.8114286,9.3345577 11.9926531,9.3345577 C12.1738776,9.3345577 12.3404082,9.3100704 12.4922449,9.26109581 L18.477551,7.37557392 Z M24,4.00122436 C24,4.1603918 23.9240816,4.2681359 23.7697959,4.32445669 L12.1028571,7.99020508 C12.0759184,7.99755127 12.0391837,8 12,8 C11.9583673,8 11.9240816,7.99755127 11.8971429,7.99020508 L5.10612245,5.84511785 C4.80734694,6.0801959 4.56,6.46709519 4.36653061,7.00581573 C4.17306122,7.54453627 4.0555102,8.16406489 4.01142857,8.86440159 C4.44979592,9.11417202 4.6677551,9.49372513 4.6677551,10.0006122 C4.6677551,10.4805632 4.46693878,10.8503214 4.06285714,11.1147842 L4.6677551,15.6253444 C4.68244898,15.7232935 4.65306122,15.8089991 4.5844898,15.8849097 C4.52081633,15.9608203 4.43755102,16 4.33469388,16 L2.33387755,16 C2.23102041,16 2.1477551,15.9608203 2.08408163,15.8849097 C2.0155102,15.8089991 1.98612245,15.7208448 2.00081633,15.6253444 L2.60571429,11.1147842 C2.20408163,10.8503214 2.00081633,10.4781145 2.00081633,10.0006122 C2.00081633,9.49372513 2.22612245,9.10927456 2.67918367,8.84481175 C2.75510204,7.40740741 3.0955102,6.2614019 3.70040816,5.40679522 L0.230204082,4.32200796 C0.0783673469,4.26568717 0,4.15794307 0,3.99877564 C0,3.8396082 0.0759183673,3.7318641 0.230204082,3.67554331 L11.8971429,0.00979491889 C11.9240816,0.00244872972 11.9608163,0 12,0 C12.0416327,0 12.0759184,0.00244872972 12.1028571,0.00979491889 L23.7697959,3.67554331 C23.9240816,3.73431283 24,3.84205693 24,4.00122436 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
