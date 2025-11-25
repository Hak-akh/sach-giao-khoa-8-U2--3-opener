import { Question, QuestionType, VocabularyItem, UnitData } from './types';

// ==========================================
// UNIT 3 DATA (ENVIRONMENT)
// ==========================================
const unit3Vocab: VocabularyItem[] = [
    { word: 'sea', ipa: '/siː/', meaning: 'biển', example: 'The sea is becoming polluted.' },
    { word: 'rainforests', ipa: '/ˈreɪnfɒrɪsts/', meaning: 'rừng nhiệt đới', example: 'Rainforests are disappearing.' },
    { word: 'rivers', ipa: '/ˈrɪvərz/', meaning: 'sông', example: 'Many rivers dry up in summer.' },
    { word: 'lakes', ipa: '/leɪks/', meaning: 'hồ', example: 'The lake is full of fish.' },
    { word: 'air', ipa: '/eə(r)/', meaning: 'không khí', example: 'We need fresh air to breathe.' },
    { word: 'ice caps', ipa: '/ˈaɪs kæps/', meaning: 'chỏm băng', example: 'Ice caps are melting due to global warming.' },
    { word: 'become polluted', ipa: '/pəˈluːtɪd/', meaning: 'trở nên ô nhiễm', example: 'The river has become polluted.' },
    { word: 'dry up', ipa: '/draɪ ʌp/', meaning: 'cạn kiệt / khô cạn', example: 'The stream might dry up soon.' },
    { word: 'disappear', ipa: '/dɪsəˈpɪə(r)/', meaning: 'biến mất', example: 'Many species will disappear.' },
    { word: 'melt', ipa: '/melt/', meaning: 'tan chảy', example: 'Ice melts when it is hot.' }
];

const unit3Questions: Question[] = [
    {
        id: `u3-vocab-write-1`,
        type: QuestionType.ListenWrite,
        title: `1. Từ vựng: Nghe và Viết`,
        prompt: 'Nghe từ vựng, nhìn phiên âm và gõ lại chính xác từ đó.',
        audioText: 'rainforests',
        display: '/ˈreɪnfɒrɪsts/',
        answer: 'rainforests',
        explanation: `Từ đúng là <b>"rainforests"</b>. Nghĩa tiếng Việt: rừng nhiệt đới.`,
    },
    {
        id: 'u3-vocab-match',
        type: QuestionType.Match,
        title: '2. Từ vựng: Nối từ với nghĩa',
        description: 'Ghép từ vựng tiếng Anh với nghĩa tiếng Việt tương ứng.',
        explanation: 'Hãy học thuộc bảng từ vựng để làm tốt phần này.',
        items: [
            { id: 'A1', A: 'rainforests', B: 'rừng mưa nhiệt đới' },
            { id: 'A2', A: 'dry up', B: 'cạn khô / cạn kiệt' },
            { id: 'A3', A: 'melt', B: 'tan chảy' },
            { id: 'A4', A: 'become polluted', B: 'trở nên ô nhiễm' },
            { id: 'A5', A: 'ice caps', B: 'chỏm băng' },
            { id: 'A6', A: 'disappear', B: 'biến mất' },
            { id: 'A7', A: 'rivers', B: 'sông' },
        ],
    },
    {
        id: 'u3-fill-blanks',
        type: QuestionType.Fill,
        title: '3. Ngữ cảnh: Điền vào chỗ trống',
        explanation: 'Dựa vào các cụm từ collocations trong bài học: "rivers dry up", "ice caps melt", "air becomes polluted".',
        options: ['environment', 'polluted', 'dry up', 'disappear', 'lakes', 'melt'],
        questions: [
            { text: 'The air becomes __ because of smoke from cars and factories.', answer: 'polluted', explanation: 'Không khí trở nên ô nhiễm (polluted) do khói bụi.' },
            { text: 'In the dry season, some rivers and lakes __.', answer: 'dry up', explanation: 'Vào mùa khô, sông hồ cạn kiệt (dry up).' },
            { text: 'Global warming makes ice caps __.', answer: 'melt', explanation: 'Nóng lên toàn cầu làm chỏm băng tan chảy (melt).' },
            { text: 'If we cut down trees, rainforests will __.', answer: 'disappear', explanation: 'Nếu chặt cây, rừng sẽ biến mất (disappear).' },
            { text: 'We need to protect our __.', answer: 'environment', explanation: 'Chúng ta cần bảo vệ môi trường (environment).' },
        ],
    },
    {
        id: 'u3-pronun-1',
        type: QuestionType.MCQ,
        title: '4. Ngữ âm: Chọn từ có phát âm khác',
        prompt: 'Chọn từ có phần gạch chân phát âm khác với các từ còn lại (Phân biệt /aɪ/ và /eɪ/).',
        audioText: 'ice, dry, lake, die',
        options: [
            { text: 'A. <u>i</u>ce', value: 'ice' },
            { text: 'B. dr<u>y</u>', value: 'dry' },
            { text: 'C. l<u>a</u>ke', value: 'lake' },
            { text: 'D. d<u>ie</u>', value: 'die' },
        ],
        answer: 'lake',
        explanation: '<b>Ice, Dry, Die</b> đều chứa nguyên âm đôi <b>/aɪ/</b>. <br><b>Lake</b> chứa nguyên âm đôi <b>/eɪ/</b>. <br>Đáp án là C.',
    },
    {
        id: 'u3-pronun-2',
        type: QuestionType.MCQ,
        title: '5. Ngữ âm: Chọn từ có phát âm khác',
        prompt: 'Chọn từ có phần gạch chân phát âm khác với các từ còn lại.',
        audioText: 'rain, save, environment, wild',
        options: [
            { text: 'A. r<u>ai</u>n', value: 'rain' },
            { text: 'B. s<u>a</u>ve', value: 'save' },
            { text: 'C. env<u>i</u>ronment', value: 'environment' },
            { text: 'D. w<u>ai</u>t', value: 'wait' },
        ],
        answer: 'environment',
        explanation: '<b>Rain, Save, Wait</b> đều chứa âm <b>/eɪ/</b>. <br><b>Environment</b> chứa âm <b>/aɪ/</b> (ở âm tiết thứ 2). <br>Đáp án là C.',
    },
    {
        id: 'u3-conditional-1',
        type: QuestionType.ShortAnswer,
        title: '6. Ngữ pháp: Câu điều kiện loại 1',
        prompt: 'Viết tiếp vế sau của câu điều kiện (kết quả).',
        prefix: 'If ice caps melt, ...',
        placeholder: 'sea levels will rise',
        correctAnswer: 'rise',
        explanation: 'Nếu băng tan, mực nước biển sẽ dâng cao. <br>Gợi ý: "sea levels will rise" hoặc "the sea level will rise".',
    },
    {
        id: 'u3-scramble-1',
        type: QuestionType.SentenceScramble,
        title: '7. Sắp xếp câu (Nghe và Xếp)',
        prompt: 'Nghe và sắp xếp các từ sau thành câu hoàn chỉnh về bảo vệ môi trường.',
        audioText: 'If we pollute the rivers fish will die',
        segments: ['the rivers,', 'If', 'fish', 'will die.', 'we pollute'],
        correctOrder: ['If', 'we pollute', 'the rivers,', 'fish', 'will die.'],
        explanation: 'Cấu trúc câu điều kiện loại 1: <br><b>If + S + V (hiện tại), S + will + V (nguyên thể).</b><br>Dịch: Nếu chúng ta làm ô nhiễm các dòng sông, cá sẽ chết.',
    }
];

// ==========================================
// UNIT 2 DATA (DISASTERS) - NEW CONTENT
// ==========================================

const unit2Vocab: VocabularyItem[] = [
    { word: 'tsunami', ipa: '/tsuːˈnɑːmi/', meaning: 'sóng thần', example: 'A huge tsunami hit the coast.' },
    { word: 'earthquake', ipa: '/ˈɜːθkweɪk/', meaning: 'động đất', example: 'The building shook during the earthquake.' },
    { word: 'landslide', ipa: '/ˈlændslaɪd/', meaning: 'sạt lở đất', example: 'Heavy rain caused a landslide.' },
    { word: 'flood', ipa: '/flʌd/', meaning: 'lũ lụt', example: 'The flood covered the town in water.' },
    { word: 'storm', ipa: '/stɔːm/', meaning: 'bão', example: 'The storm destroyed many houses.' },
    { word: 'volcanic eruption', ipa: '/vɒlˈkænɪk ɪˈrʌpʃn/', meaning: 'phun trào núi lửa', example: 'The volcanic eruption was terrifying.' },
    { word: 'explosion', ipa: '/ɪkˈspləʊʒn/', meaning: 'vụ nổ', example: 'We heard a loud explosion.' },
    { word: 'shipwreck', ipa: '/ˈʃɪprek/', meaning: 'đắm tàu', example: 'Divers explored the shipwreck.' },
    { word: 'crash', ipa: '/kræʃ/', meaning: 'vụ va chạm (xe/máy bay)', example: 'There was a car crash on the road.' },
    { word: 'terrified', ipa: '/ˈterɪfaɪd/', meaning: 'khiếp sợ', example: 'She was terrified of the storm.' },
    { word: 'relieved', ipa: '/rɪˈliːvd/', meaning: 'nhẹ nhõm', example: 'I felt relieved when it stopped.' },
    { word: 'worried', ipa: '/ˈwʌrid/', meaning: 'lo lắng', example: 'He is worried about the future.' }
];

const unit2Questions: Question[] = [
    // I. VOCABULARY
    {
        id: 'u2-match-disasters',
        type: QuestionType.Match,
        title: '1. Vocabulary: Label the pictures (Identify Disasters)',
        description: 'Nối tên thảm họa với mô tả tương ứng.',
        explanation: 'Các thảm họa thiên nhiên chính: Earthquake (Động đất), Tsunami (Sóng thần), Flood (Lũ lụt)...',
        items: [
            { id: 'A1', A: 'tsunami', B: 'Sóng thần (Huge waves)' },
            { id: 'A2', A: 'earthquake', B: 'Động đất (Ground shaking)' },
            { id: 'A3', A: 'landslide', B: 'Sạt lở đất (Earth falling down)' },
            { id: 'A4', A: 'flood', B: 'Lũ lụt (Water covering land)' },
            { id: 'A5', A: 'storm', B: 'Bão (Strong wind and rain)' },
            { id: 'A6', A: 'volcanic eruption', B: 'Phun trào núi lửa' }
        ]
    },
    {
        id: 'u2-guess-words',
        type: QuestionType.Fill,
        title: '2. Vocabulary: Guess the words',
        explanation: 'Dựa vào gợi ý để đoán từ vựng về tai nạn.',
        options: ['explosion', 'fire', 'plane crash', 'shipwreck', 'car crash'],
        questions: [
            { text: 'A sudden loud noise → __', answer: 'explosion', explanation: 'Tiếng ồn lớn đột ngột -> Vụ nổ.' },
            { text: 'A big accident involving burning in a building → __', answer: 'fire', explanation: 'Tai nạn liên quan đến cháy -> Hỏa hoạn.' },
            { text: 'A plane hits the ground → __', answer: 'plane crash', explanation: 'Máy bay đâm xuống đất -> Rơi máy bay.' },
            { text: 'A ship sinks → __', answer: 'shipwreck', explanation: 'Tàu chìm -> Đắm tàu.' },
            { text: 'A car hits another car → __', answer: 'car crash', explanation: 'Xe hơi đâm nhau -> Tai nạn ô tô.' }
        ]
    },
    {
        id: 'u2-feelings',
        type: QuestionType.Fill,
        title: '3. Vocabulary: Feelings',
        explanation: 'Điền tính từ chỉ cảm xúc phù hợp.',
        options: ['terrified', 'relieved', 'worried'],
        questions: [
            { text: 'When the earthquake started, she was very __.', answer: 'terrified', explanation: 'Khi động đất xảy ra -> Rất sợ hãi (terrified).' },
            { text: 'He was __ after finding out nobody was hurt.', answer: 'relieved', explanation: 'Biết không ai bị thương -> Nhẹ nhõm (relieved).' },
            { text: 'They are __ about life after the flood.', answer: 'worried', explanation: 'Về cuộc sống sau lũ -> Lo lắng (worried).' }
        ]
    },
    
    // II. GRAMMAR
    {
        id: 'u2-grammar-mcq',
        type: QuestionType.MCQ,
        title: '4. Grammar: Choose the correct answer',
        prompt: 'Chọn từ vựng đúng ngữ cảnh.',
        audioText: 'landslide, shipwreck, disaster, crash',
        options: [
            { text: 'A. landslide', value: 'landslide' },
            { text: 'B. shipwreck', value: 'shipwreck' },
        ],
        questionText: '1. It rained heavily before the ______ hit the town.',
        answer: 'landslide',
        explanation: 'Mưa lớn thường gây ra sạt lở đất (landslide), không gây ra đắm tàu trên thị trấn.'
    },
    {
        id: 'u2-grammar-mcq-2',
        type: QuestionType.MCQ,
        title: '4b. Grammar: Choose the correct answer',
        prompt: 'Chọn từ vựng đúng ngữ cảnh.',
        options: [
            { text: 'A. crash', value: 'crash' },
            { text: 'B. disaster', value: 'disaster' },
        ],
        questionText: '2. Jane saw a car ______ this morning.',
        answer: 'crash',
        explanation: 'Car crash: Tai nạn xe hơi.'
    },
    {
        id: 'u2-grammar-mcq-3',
        type: QuestionType.MCQ,
        title: '4c. Grammar: Choose the correct answer',
        prompt: 'Chọn từ vựng đúng ngữ cảnh.',
        options: [
            { text: 'A. eruption', value: 'eruption' },
            { text: 'B. explosion', value: 'explosion' },
        ],
        questionText: '3. The volcanic ______ destroyed the village.',
        answer: 'eruption',
        explanation: 'Volcanic eruption: Phun trào núi lửa.'
    },
    {
        id: 'u2-grammar-mcq-4',
        type: QuestionType.MCQ,
        title: '4d. Grammar: Choose the correct answer',
        prompt: 'Chọn từ vựng đúng ngữ cảnh.',
        options: [
            { text: 'A. earthquake', value: 'earthquake' },
            { text: 'B. flood', value: 'flood' },
        ],
        questionText: '4. The ______ covered the small town in water.',
        answer: 'flood',
        explanation: 'Nước bao phủ thị trấn -> Lũ lụt (flood).'
    },
     {
        id: 'u2-grammar-mcq-5',
        type: QuestionType.MCQ,
        title: '4e. Grammar: Choose the correct answer',
        prompt: 'Chọn từ vựng đúng ngữ cảnh.',
        options: [
            { text: 'A. terrified', value: 'terrified' },
            { text: 'B. relieved', value: 'relieved' },
        ],
        questionText: '5. We were ______ when the building began to shake.',
        answer: 'terrified',
        explanation: 'Tòa nhà rung chuyển -> Sợ hãi (terrified).'
    },
    {
        id: 'u2-grammar-verbs',
        type: QuestionType.Fill,
        title: '5. Grammar: Fill in verbs',
        explanation: 'Điền động từ quá khứ phù hợp.',
        options: ['killed', 'hit', 'destroyed', 'blew', 'overflowed'],
        questions: [
            { text: 'The shipwreck __ three people.', answer: 'killed', explanation: 'Vụ đắm tàu làm thiệt mạng 3 người.' },
            { text: 'When did the storm __ the city?', answer: 'hit', explanation: 'Khi nào cơn bão đổ bộ (hit) thành phố?' },
            { text: 'The tsunami __ the roads and buildings.', answer: 'destroyed', explanation: 'Sóng thần phá hủy (destroyed) đường xá.' },
            { text: 'The wind __ hard before the storm.', answer: 'blew', explanation: 'Gió thổi mạnh (blew).' },
            { text: 'The river __ after a week of heavy rain.', answer: 'overflowed', explanation: 'Sông tràn bờ (overflowed).' }
        ]
    },
    {
        id: 'u2-word-forms',
        type: QuestionType.Fill,
        title: '6. Grammar: Word Forms',
        explanation: 'Chọn dạng từ đúng (Danh từ/Tính từ/Động từ) cho câu.',
        options: ['destruction', 'injured', 'explosion', 'erupted', 'relieved', 'terrifying', 'worried'],
        questions: [
            { text: 'The __ from the tsunami was terrible. (DESTROY)', answer: 'destruction', explanation: 'Cần danh từ: Destruction (sự phá hủy).' },
            { text: 'The police helped the __ people. (INJURE)', answer: 'injured', explanation: 'Cần tính từ: Injured people (người bị thương).' },
            { text: 'They heard a loud __ from the building. (EXPLODE)', answer: 'explosion', explanation: 'Cần danh từ: Explosion (vụ nổ).' },
            { text: 'Mount Fuji last __ in 1707. (ERUPT)', answer: 'erupted', explanation: 'Cần động từ quá khứ: Erupted (phun trào).' },
            { text: 'She felt __ because no one was injured. (RELIEVE)', answer: 'relieved', explanation: 'Cảm thấy nhẹ nhõm: Relieved.' },
            { text: 'The news says a __ storm is coming. (TERRIFY)', answer: 'terrifying', explanation: 'Một cơn bão đáng sợ: Terrifying.' },
            { text: 'People are __ about their life. (WORRY)', answer: 'worried', explanation: 'Lo lắng: Worried.' }
        ]
    },
    {
        id: 'u2-past-story',
        type: QuestionType.Fill,
        title: '7. Grammar: Past Simple / Past Continuous Story',
        explanation: 'Hoàn thành câu chuyện ở thì quá khứ.',
        options: ['started', 'were running', 'fell', 'opened', 'took'],
        questions: [
            { text: 'David was running in the forest when it __ to rain.', answer: 'started', explanation: 'Hành động cắt ngang (bắt đầu mưa) -> Quá khứ đơn.' },
            { text: 'He and his dog __ to the car when the lightning struck.', answer: 'were running', explanation: 'Hành động đang diễn ra -> Quá khứ tiếp diễn.' },
            { text: 'David __ to the ground.', answer: 'fell', explanation: 'Hành động ngã xuống -> Quá khứ đơn.' },
            { text: 'When he __ his eyes...', answer: 'opened', explanation: 'Mở mắt -> Quá khứ đơn.' },
            { text: '...the emergency service __ him to the hospital.', answer: 'took', explanation: 'Đưa đến viện -> Quá khứ đơn.' }
        ]
    },

    // III. PRONUNCIATION
    {
        id: 'u2-pronun-1',
        type: QuestionType.MCQ,
        title: '8. Pronunciation: Odd one out',
        prompt: 'Chọn từ có phần gạch chân phát âm khác.',
        audioText: 'holiday, nothing, stop, volcanic',
        options: [
            { text: 'A. h<u>o</u>liday', value: 'holiday' },
            { text: 'B. n<u>o</u>thing', value: 'nothing' }, // /ʌ/
            { text: 'C. st<u>o</u>p', value: 'stop' },
            { text: 'D. v<u>o</u>lcanic', value: 'volcanic' }
        ],
        answer: 'nothing',
        explanation: 'Nothing (/ʌ/) khác với các từ còn lại (/ɒ/).'
    },
    {
        id: 'u2-pronun-2',
        type: QuestionType.MCQ,
        title: '9. Pronunciation: Odd one out',
        prompt: 'Chọn từ có phần gạch chân phát âm khác.',
        audioText: 'warm, harm, farm, start',
        options: [
            { text: 'A. w<u>a</u>rm', value: 'warm' }, // /ɔː/
            { text: 'B. h<u>a</u>rm', value: 'harm' }, // /ɑː/
            { text: 'C. f<u>a</u>rm', value: 'farm' }, // /ɑː/
            { text: 'D. st<u>a</u>rt', value: 'start' } // /ɑː/
        ],
        answer: 'warm',
        explanation: 'Warm (/ɔː/) khác với các từ còn lại (/ɑː/).'
    },
    {
        id: 'u2-pronun-ed',
        type: QuestionType.MCQ,
        title: '10. Pronunciation: -ed endings',
        prompt: 'Chọn từ có đuôi -ed phát âm khác.',
        audioText: 'climbed, destroyed, exploded, injured',
        options: [
            { text: 'A. climb<u>ed</u>', value: 'climbed' }, // /d/
            { text: 'B. destroy<u>ed</u>', value: 'destroyed' }, // /d/
            { text: 'C. explod<u>ed</u>', value: 'exploded' }, // /id/
            { text: 'D. injur<u>ed</u>', value: 'injured' } // /d/
        ],
        answer: 'exploded',
        explanation: 'Exploded (/ɪd/) vì kết thúc bằng /d/, các từ còn lại là /d/.'
    },
    {
        id: 'u2-pronun-ed-2',
        type: QuestionType.MCQ,
        title: '11. Pronunciation: -ed endings',
        prompt: 'Chọn từ có đuôi -ed phát âm khác.',
        audioText: 'screamed, overflowed, cleaned, crashed',
        options: [
            { text: 'A. scream<u>ed</u>', value: 'screamed' }, // /d/
            { text: 'B. overflow<u>ed</u>', value: 'overflowed' }, // /d/
            { text: 'C. clean<u>ed</u>', value: 'cleaned' }, // /d/
            { text: 'D. crash<u>ed</u>', value: 'crashed' } // /t/
        ],
        answer: 'crashed',
        explanation: 'Crashed (/t/) vì kết thúc bằng /ʃ/, các từ còn lại là /d/.'
    },
    {
        id: 'u2-pronun-ed-3',
        type: QuestionType.MCQ,
        title: '12. Pronunciation: -ed endings',
        prompt: 'Chọn từ có đuôi -ed phát âm khác.',
        audioText: 'walked, watched, stayed, washed',
        options: [
            { text: 'A. walk<u>ed</u>', value: 'walked' }, // /t/
            { text: 'B. watch<u>ed</u>', value: 'watched' }, // /t/
            { text: 'C. stay<u>ed</u>', value: 'stayed' }, // /d/
            { text: 'D. wash<u>ed</u>', value: 'washed' } // /t/
        ],
        answer: 'stayed',
        explanation: 'Stayed (/d/) vì kết thúc bằng nguyên âm, các từ còn lại là /t/.'
    },

    // IV. LISTENING
    {
        id: 'u2-listening',
        type: QuestionType.Fill,
        title: '13. Listening: Gap Fill',
        prompt: 'Nghe đoạn hội thoại và điền vào chỗ trống.',
        audioText: 'I was in the kitchen when I heard a loud noise. It was a plane crash nearby. I looked out and saw smoke and fire everywhere. Luckily, only the pilot got injured. I feel relieved now because I was safe inside.',
        explanation: 'Nghe kỹ các từ khóa về địa điểm, sự kiện và cảm xúc.',
        options: ['kitchen', 'plane crash', 'fire', 'The pilot', 'safe'],
        questions: [
            { text: 'Jane heard a loud noise when she was in her __.', answer: 'kitchen', explanation: 'Cô ấy ở trong bếp (kitchen).' },
            { text: 'The accident was a __.', answer: 'plane crash', explanation: 'Tai nạn rơi máy bay (plane crash).' },
            { text: 'She saw smoke and __.', answer: 'fire', explanation: 'Khói và lửa (fire).' },
            { text: '__ got injured.', answer: 'The pilot', explanation: 'Phi công bị thương.' },
            { text: 'She feels relieved now because she was __.', answer: 'safe', explanation: 'Cô ấy an toàn (safe).' }
        ]
    },

    // V. WRITING
    {
        id: 'u2-writing',
        type: QuestionType.Writing,
        title: '14. Writing',
        prompt: 'Viết 3 câu về một tai nạn/thảm họa. Sử dụng thì Quá khứ đơn hoặc Quá khứ tiếp diễn.',
        explanation: 'Gợi ý: I was [doing something] when [disaster] happened.',
        prefix: 'Story:',
        placeholder: '1. I was sleeping when the earthquake happened.\n2. ...',
        correctAnswer: 'hint used'
    }
];

// Export Units Data
export const units: Record<string, UnitData> = {
    'unit2': {
        id: 'unit2',
        title: 'Unit 2: Disasters & Accidents',
        icon: '🌋',
        vocabulary: unit2Vocab,
        questions: unit2Questions
    },
    'unit3': {
        id: 'unit3',
        title: 'Unit 3: The Environment',
        icon: '🌍',
        vocabulary: unit3Vocab,
        questions: unit3Questions
    }
};

// Default export for backward compatibility
export const vocabularyList = unit2Vocab; 
export const quizData = unit2Questions;
