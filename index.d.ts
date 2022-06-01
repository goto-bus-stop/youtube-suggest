declare function youtubeSuggest (query: string, opts?: youtubeSuggest.SuggestOptions): Promise<string[]>
declare namespace youtubeSuggest {
  type SuggestOptions = {
    /** Optionally specify an ISO639-1 code to return suggestions most relevant for that language. */
    locale?: string
  }
}

export = youtubeSuggest
