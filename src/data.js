const apps = [
    { name: 'Slader', url: 'https://apps.apple.com/us/app/slader-homework-answers/id579962583', img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/05/8f/19/058f19f0-a060-dd89-8471-ab1a51486521/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.jpeg/230x0w.jpg' },
    { name: 'Quizlet', url: 'https://apps.apple.com/us/app/quizlet/id546473125', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/da/f5/cf/daf5cf0f-b58c-6511-3e9a-1b36a82604ff/AppIcon-production-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Photomath', url: 'https://apps.apple.com/us/app/photomath/id919087726', img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/1e/99/e3/1e99e381-df49-9341-c756-4d11f8047786/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/230x0w.png' },
    { name: 'ABCya', url: 'https://apps.apple.com/us/app/abcya-games/id1079974015', img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/2c/84/fe/2c84fe0c-52a6-7ff3-47a5-060475c121ae/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-85-220.png/230x0w.png' },
    { name: 'Khan Academy', url: 'https://apps.apple.com/us/app/khan-academy/id469863705', img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/06/91/6c/06916c3e-722b-d2f8-4c9f-9199cf043eb1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Actively Learn', url: 'https://apps.apple.com/us/app/actively-learn/id1366111784', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/52/93/bc/5293bccd-7bf1-7886-387b-23f1c2cc7e97/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/230x0w.png' },
    { name: 'Achieve3000', url: 'https://apps.apple.com/us/app/achieve3000/id757933892', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/06/29/f2/0629f299-75b2-35cc-5923-810f0eead3d7/AppIcon-0-1x_U007emarketing-0-85-220-0-10.png/230x0w.png' },
    { name: 'Writable', url: 'https://www.writable.com/', img: 'https://1wtywzj54kj2qxsdu4aufiil-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/writable_logo.png' },
    { name: 'Google Classroom', url: 'https://classroom.google.com/', img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png' },
    { name: 'ZOOM', url: 'https://apps.apple.com/us/app/zoom-cloud-meetings/id546505307', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/e3/4b/a6/e34ba6f3-be8a-b36e-227a-e21c8b119154/AppIcon-0-1x_U007emarketing-0-0-85-220-9.png/217x0w.png' },
    { name: 'Kahoot', url: 'https://apps.apple.com/us/app/kahoot/id1131203560', img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/2f/84/9c/2f849c37-c4e9-4757-9696-38d28a745977/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Seesaw', url: 'https://apps.apple.com/us/app/seesaw-the-learning-journal/id930565184', img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/19/db/b6/19dbb62a-a34a-56ca-c9e6-6eb9c245888c/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/230x0w.png' },
    { name: 'Remind', url: 'https://apps.apple.com/us/app/remind-fast-efficient-school/id522826277', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/54/6c/e0/546ce0e5-4b6f-c90e-5bcd-de8bc0463714/AppIcon-1x_U007emarketing-0-6-0-0-85-220.png/230x0w.png' },
    { name: 'Classtree', url: 'https://apps.apple.com/us/app/classtree-parent-teacher-communication/id1016725637', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/39/90/4a/39904a56-5d6e-347e-43af-3512640b0b7f/mzl.lmyfcsko.png/230x0w.png' },
    { name: 'Slack', url: 'https://apps.apple.com/us/app/slack-team-communication/id618783545', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/4d/e4/c3/4de4c3a5-2533-777d-331d-b8b737b663f9/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Trello', url: 'https://apps.apple.com/us/app/trello-organize-anything/id461504587', img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/0c/f4/9c/0cf49cb0-417e-d5ec-e560-1a085bf0de77/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Additio', url: 'https://apps.apple.com/us/app/additio-teachers-gradebook/id908748733', img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/88/e6/4b/88e64b19-3d90-0ce7-0ffe-039b25123e83/AppIcon-0-1x_U007emarketing-0-0-sRGB-85-220-0-9.png/230x0w.png' },
    { name: 'Doceri', url: 'https://apps.apple.com/us/app/doceri-interactive-whiteboard/id412443803', img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/ca/3e/aa/ca3eaa73-eb12-395a-39fa-a5f12ad2dcd2/mzl.ktydhsbz.png/230x0w.png' },
    { name: 'Epic', url: 'https://apps.apple.com/us/app/epic-unlimited-books-for/id719219382', img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/d8/ff/33/d8ff33bf-db19-000b-2e4e-d38b90b621b3/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Dropbox', url: 'https://apps.apple.com/us/app/dropbox-backup-sync-share/id327630330', img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/7d/af/b6/7dafb6c4-1cdd-2dc4-3511-5790bd9ad77c/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'Pocket', url: 'https://apps.apple.com/us/app/pocket-save-read-grow/id309601447', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/06/a6/03/06a603e1-9645-eb81-0e26-532968c5486d/AppIcon-0-1x_U007emarketing-0-7-0-0-0-85-220.png/230x0w.png' },
    { name: 'ClassDojo', url: 'https://apps.apple.com/us/app/classdojo/id552602056', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/9e/c8/58/9ec858e5-7921-795e-f637-e34be67c6060/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/230x0w.png' },
    { name: 'WolframAlpha', url: 'https://apps.apple.com/us/app/wolframalpha/id334989259', img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/5c/5a/57/5c5a578d-c15c-f127-3b23-80ca031c42fe/WolframAlpha-AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png' },
    { name: 'StudyBlue', url: 'https://apps.apple.com/us/app/studyblue/id323887414', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/42/e2/e9/42e2e9de-5a89-f749-4326-b96733920698/AppIcon-0-1x_U007emarketing-0-0-85-220-0-10.png/230x0w.png' },
    { name: 'TED', url: 'https://apps.apple.com/us/app/ted/id376183339', img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/b5/bb/15/b5bb15e5-da19-6fe3-75cd-29e6560f149d/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.png' },
    { name: 'ScratchJr', url: 'https://apps.apple.com/us/app/scratchjr/id895485086', img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/59/21/9c/59219c90-f6e6-fc83-de6e-720c654e2a92/AppIcon-0-0-1x_U007emarketing-0-0-5-85-220.png/230x0w.png' },
    { name: 'Hopscotch', url: 'https://apps.apple.com/us/app/hopscotch-programming-for-kids/id617098629', img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/fd/62/d4/fd62d497-91d5-4181-9d22-401862e7150b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/230x0w.png' },
    { name: 'Coding Ninjas', url: 'https://apps.apple.com/us/app/coding-ninjas/id1363729436', img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/00/92/7c/00927c21-cad4-240c-3d05-21f145db9edd/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/230x0w.png' },
    { name: 'Little Bird Tales ', url: 'https://apps.apple.com/us/app/little-bird-tales-storytelling/id517996494', img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/c1/df/f6/c1dff6d0-b115-e802-731e-8eea603387bc/AppIcon-0-1x_U007emarketing-85-220-6.png/230x0w.png' },
    
]

export default apps;