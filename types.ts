export enum QuestionType {
    ListenWrite = 'listen-write',
    Match = 'match',
    Fill = 'fill',
    MCQ = 'mcq',
    ShortAnswer = 'short-answer',
    Writing = 'writing',
    Listening = 'listening',
    SentenceScramble = 'sentence-scramble'
}

export interface BaseQuestion {
    id: string;
    type: QuestionType;
    title: string;
    prompt?: string;
    explanation: string;
    audioText?: string; // Text to be spoken by TTS
}

export interface ListenWriteQuestion extends BaseQuestion {
    type: QuestionType.ListenWrite;
    display: string;
    answer: string;
}

export interface MatchItem {
    id: string;
    A: string;
    B: string;
}

export interface MatchQuestion extends BaseQuestion {
    type: QuestionType.Match;
    description: string;
    items: MatchItem[];
}

export interface FillQuestionItem {
    text: string;
    answer: string;
    explanation: string;
}

export interface FillQuestion extends BaseQuestion {
    type: QuestionType.Fill;
    options: string[];
    questions: FillQuestionItem[];
}

export interface MCQOption {
    text: string; // Can contain HTML
    value: string;
}

export interface MCQQuestion extends BaseQuestion {
    type: QuestionType.MCQ | QuestionType.Listening;
    options: MCQOption[];
    answer: string;
    questionText?: string;
}

export interface TextEntryQuestion extends BaseQuestion {
    type: QuestionType.ShortAnswer | QuestionType.Writing;
    prefix?: string;
    placeholder: string;
    correctAnswer: string; // Keyword or full text
}

export interface SentenceScrambleQuestion extends BaseQuestion {
    type: QuestionType.SentenceScramble;
    segments: string[]; // The chunks to be ordered
    correctOrder: string[]; // The correct sequence of chunks
}

export type Question = 
    | ListenWriteQuestion 
    | MatchQuestion 
    | FillQuestion 
    | MCQQuestion 
    | TextEntryQuestion
    | SentenceScrambleQuestion;

export interface UserAnswerState {
    value: any; // String for most, Object for Match/Fill
    isCorrect: boolean;
    isChecked: boolean;
    isHintUsed: boolean;
}

export interface VocabularyItem {
    word: string;
    ipa: string;
    meaning: string;
    example?: string;
}

export interface UnitData {
    id: string;
    title: string;
    icon: string;
    vocabulary: VocabularyItem[];
    questions: Question[];
}
