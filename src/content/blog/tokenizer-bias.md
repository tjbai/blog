---
title: A Tale of Tokenizer Bias
description: A Tale of Tokenizer Bias
pubDate: 2025-01-04 18:20
---

I was talking to Alex yesterday and he said something super interesting. When asked about their LLM use, his Japanese relative remarked that it felt like language models were *slower* at producing Japanese than English. Hmm.

I thought about this for a good 30 minutes and eventually came around to an answer that is pretty simple and illuminating. Before getting there, I briefly considered whether this was an artifact of Unicode's variable-length encoding, or if there might be a deeper result here about information density in different languages.

But, Occam's razor.

The _simplest_ answer is that OpenAI is intentionally throttling inference of non-English languages as some kind of embargo on East Asia. My Bayesian prior on this possibility is pretty low.

The _second simplest_ answer is that this is a (known) failure mode of BPE tokenization. My best explanation goes something like this: Japanese comprises a comparatively tiny percentage of the training corpus, so frequent byte-pairs in Japanese text are proportionally disadvantaged from reaching the top of the heap at each merge step. In other words, we know that BPE tokenization approximates [some kind of optimal compression scheme](https://aclanthology.org/2023.findings-acl.38/#:~:text=Byte%2DPair%20Encoding%20(BPE),not%20yet%20been%20laid%20down.), but this is heavily biased towards English over other languages because of unbalanced data!

This potentially implies that accomplishing some task in Japanese, or really any underrepresented language, can require _significantly_ more forward passes than the same task in English, because that language's tokens just aren't as informative. "Informative" in the purest information theoretical sense.

Don't believe me? Well this morning as I was reading the technical report for Deepseek-V3, a new model recently released by the eponymous lab, I saw this:

_The tokenizer for DeepSeek-V3 employs Byte-level BPE (Shibata et al., 1999) with an extended vocabulary of 128K tokens. The pretokenizer and training data for our tokenizer are modified to optimize multilingual compression efficiency._

This reads to me that the premier Chinese AI lab had to make intentional modifications to the vocab _after running BPE_ to avoid the exact problem observed above! Leave it to us/those Westerners for not caring enough to either notice or address it.

If you're confused... I'm too lazy to tutorialize this post any more, but I think understanding language model vocabularies, tokens, and their construction through the BPE algorithm is both really important and really easy. Pasting this whole thing in GPT-4o/Claude should get you 95% of the way there.
