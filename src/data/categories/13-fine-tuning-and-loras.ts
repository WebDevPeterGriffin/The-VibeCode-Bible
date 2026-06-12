import { Category } from '../types';

export const category: Category = {
    id: 'cat-13',
    slug: 'fine-tuning-and-loras',
    title: 'Fine-Tuning & LoRAs',
    sections: [
        {
            "id": "43",
            "slug": "what-is-a-lora",
            "title": "43. What Is a LoRA? (Start Here)",
            "blocks": [
                {
                    "type": "p",
                    "text": "Imagine the AI model is a really smart grown-up who went to school for twenty years. They know a little bit about almost everything — history, jokes, science, how to write code. But they do not know YOUR stuff. They do not know how you like your code written, what your business does, or the special words your team uses."
                },
                {
                    "type": "p",
                    "text": "You cannot send this grown-up back to school for another twenty years. That costs too much money and takes too long. So instead, you give them a small notebook. You fill the notebook with examples of exactly what you want — how you write, the answers you like, the style you use. The grown-up reads the notebook over and over until they have it memorised. Now they are an expert at YOUR thing, and they still remember everything else they learned at school."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "That little memorised notebook is a LoRA. The grown-up is the base model. You did not rebuild the brain — you added a small, specialised layer of new knowledge on top of it."
                },
                {
                    "type": "h2",
                    "text": "Now the grown-up version"
                },
                {
                    "type": "p",
                    "text": "LoRA stands for Low-Rank Adaptation. It is a technique for teaching an existing AI model new behaviour without retraining the whole thing. A full large language model has billions of internal numbers called weights — these are what hold everything the model knows. Changing all of them is called full fine-tuning, and it is brutally expensive: you need enormous GPUs, the process takes a long time, and you end up with a complete copy of the model that is many gigabytes in size."
                },
                {
                    "type": "p",
                    "text": "LoRA takes a shortcut that sounds almost too good to be true. It freezes the entire original model so none of its billions of weights ever change. Then it trains a tiny set of brand-new weights that sit alongside the frozen ones. These new weights are the adapter. When you run the model, the frozen base provides all the general intelligence and the small adapter nudges the output toward what you trained it on."
                },
                {
                    "type": "h2",
                    "text": "Why this is a big deal"
                },
                {
                    "type": "ul",
                    "items": [
                        "Tiny files — a LoRA adapter is usually 10MB to a few hundred MB, versus many gigabytes for a full model. You can email one.",
                        "Cheap to train — because you are only training a small fraction of the weights, you can do it on a single consumer GPU instead of a data centre.",
                        "It does not forget — the base model is frozen, so all the general knowledge stays intact. You are adding a skill, not overwriting the brain.",
                        "Swappable — you can keep one base model and snap different LoRAs onto it. One for your writing voice, one for your codebase style, one for a specific client's tone."
                    ]
                },
                {
                    "type": "h2",
                    "text": "What people actually use LoRAs for"
                },
                {
                    "type": "p",
                    "text": "The most common use is teaching a model a consistent style or a narrow skill. Train it on your past blog posts and it writes in your voice. Train it on your company's support tickets and their resolutions, and it answers in your house style. Train it on your codebase and it follows your conventions without you having to explain them every single prompt. In the image world it is the same idea — a Stable Diffusion LoRA trained on photos of one specific person or art style makes the model generate that person or style on demand."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Think of it this way: prompting tells the model what to do this one time. A LoRA changes what the model is. One is a sticky note. The other is a new habit baked in. The rest of this category teaches you exactly how to build that new habit."
                }
            ]
        },
        {
            "id": "44",
            "slug": "lora-vs-prompting-vs-fine-tuning",
            "title": "44. LoRA vs Prompting vs Full Fine-Tuning",
            "blocks": [
                {
                    "type": "p",
                    "text": "Before you train anything, you need to know whether you even should. There are three ways to make an AI behave the way you want, and they sit on a ladder from cheap-and-instant to expensive-and-permanent. Ninety percent of the time the answer is the cheapest rung. People reach for LoRA training when a better-written prompt would have solved the problem in five minutes. Do not be that person."
                },
                {
                    "type": "h2",
                    "text": "The three rungs of the ladder"
                },
                {
                    "type": "p",
                    "text": "Rung one is prompting and context. You write instructions, you paste in examples, you attach documents. The model's weights never change — you are just feeding it better information at runtime. This is what skill files and AGENTS.md do in this bible. It is instant, free, and reversible. You can change your mind every single message."
                },
                {
                    "type": "p",
                    "text": "Rung two is LoRA fine-tuning. You actually train new adapter weights from a dataset of examples. The behaviour gets baked into a small file you load with the model. This is permanent learning, but cheap and swappable. You do this when prompting alone cannot get the consistency or the specific skill you need."
                },
                {
                    "type": "p",
                    "text": "Rung three is full fine-tuning. You retrain all of the model's weights. This is the heaviest, most expensive option and produces a full-size model. Almost nobody outside of well-funded labs needs this. LoRA gets you most of the benefit for a fraction of the cost, which is exactly why it took over."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The mental model: prompting is what you tell the model. Fine-tuning is what the model becomes. If the problem is 'it does not KNOW the right thing,' try context first. If the problem is 'it knows but will not consistently DO it the way I want,' that is when a LoRA earns its keep."
                },
                {
                    "type": "h2",
                    "text": "When prompting is enough (try this first)"
                },
                {
                    "type": "ul",
                    "items": [
                        "You need the model to follow a format — give it two or three examples in the prompt and it usually copies them",
                        "You need fresh or private facts — paste them in, or use retrieval (RAG) to pull them in automatically",
                        "The behaviour changes often — a prompt you can edit beats a model you have to retrain",
                        "You are still figuring out what 'good' looks like — never train on a target you cannot yet describe"
                    ]
                },
                {
                    "type": "h2",
                    "text": "When a LoRA is the right call"
                },
                {
                    "type": "ul",
                    "items": [
                        "You need rock-solid consistency across thousands of calls — prompting drifts, a trained adapter holds the line",
                        "Your style or skill is hard to describe but easy to show — you have 500 good examples but cannot write the rule",
                        "Your prompt has grown into a monster — if you are pasting the same 3,000-token instruction every call, baking it into a LoRA is cheaper and faster at inference",
                        "You want it fully local and private — a small specialised model on your own hardware, no API, no data leaving your machine",
                        "You need a smaller model to punch above its weight — a well-tuned 8B model can beat a generic 70B on your one narrow task"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "A LoRA cannot teach the model facts reliably. If you train it on 'our refund policy is 30 days,' it learns the STYLE of refund answers, not the hard fact — and it will happily make up '45 days' next week. For facts that must be exact, use retrieval, not fine-tuning. This is the single most expensive mistake beginners make."
                },
                {
                    "type": "h2",
                    "text": "The honest decision flow"
                },
                {
                    "type": "ol",
                    "items": [
                        "Can a better prompt or a few examples fix it? If yes, stop here. You are done.",
                        "Is it a missing-fact problem? Use RAG / retrieval, not a LoRA.",
                        "Is it a consistent-style or narrow-skill problem with lots of examples? Now a LoRA makes sense.",
                        "Do you genuinely need to change the model's deep knowledge across many domains? Only then look at full fine-tuning — and you probably still do not need it."
                    ]
                }
            ]
        },
        {
            "id": "45",
            "slug": "how-a-lora-works-under-the-hood",
            "title": "45. How a LoRA Works Under the Hood",
            "blocks": [
                {
                    "type": "p",
                    "text": "Here is the simple picture first. Inside the model there are giant grids of numbers, like enormous spreadsheets. Normally, to teach the model something new, you would have to carefully change millions of cells in those spreadsheets. That is slow and risky. LoRA says: leave the big spreadsheet completely alone. Instead, keep a tiny side-note next to it, and at the end add the side-note to the big sheet. The big sheet never changes — the side-note does all the learning."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The magic trick: a big change to a giant grid can often be rebuilt from two much smaller grids multiplied together. So instead of learning the giant change directly, you learn the two little grids. Far fewer numbers to train, almost the same result."
                },
                {
                    "type": "h2",
                    "text": "The actual mechanism"
                },
                {
                    "type": "p",
                    "text": "A weight matrix in the model — call it W — has a shape like 4096 by 4096. That is about 16 million numbers in a single layer, and there are many layers. Full fine-tuning adjusts all of them. LoRA instead represents the change to that matrix, written as delta-W, as the product of two skinny matrices: A and B. If A is 4096 by 8 and B is 8 by 4096, multiplying them gives you a 4096 by 4096 result — the same shape as W — but you only had to store and train 4096 times 8, twice. That is roughly 65,000 numbers instead of 16 million. The frozen W plus this small learned delta-W is what the model actually uses."
                },
                {
                    "type": "p",
                    "text": "That little number 8 in the middle is the rank. It is the width of the bottleneck the change has to squeeze through. The whole technique is called Low-Rank Adaptation because you are assuming the useful change is low-rank — that it can be captured in a narrow bottleneck. In practice this assumption holds shockingly well for adapting a model to a new style or task."
                },
                {
                    "type": "h2",
                    "text": "Rank and alpha — the two dials that matter"
                },
                {
                    "type": "ul",
                    "items": [
                        "Rank (r) — how much capacity the adapter has. Common values are 8, 16, 32, and 64. Higher rank can learn more complex changes but uses more memory and overfits faster on small datasets. Start at 16 for most tasks.",
                        "Alpha (lora_alpha) — a scaling factor that controls how loud the adapter's voice is when added back to the frozen weights. The model scales the LoRA output by alpha divided by rank. A common rule of thumb is to set alpha equal to the rank, or to double it. If your training has no effect, your alpha may be too low; if it goes haywire and forgets everything, too high.",
                        "Dropout (lora_dropout) — randomly ignores some of the adapter during training to prevent it memorising the dataset too tightly. 0 to 0.1 is normal.",
                        "Target modules — which weight matrices in the model actually get an adapter attached. You do not adapt every layer; you pick specific ones."
                    ]
                },
                {
                    "type": "h2",
                    "text": "Where the adapters actually attach"
                },
                {
                    "type": "p",
                    "text": "You do not bolt a LoRA onto every matrix in the network. The biggest bang for your buck is the attention projection matrices — the parts of the model responsible for deciding what to pay attention to. In code you will see these named q_proj, k_proj, v_proj, and o_proj (query, key, value, and output projections). Many setups also target the feed-forward layers (gate_proj, up_proj, down_proj) for stronger adaptation. Targeting more modules gives the adapter more reach but increases its size and training cost."
                },
                {
                    "type": "h2",
                    "text": "QLoRA — how people train big models on small GPUs"
                },
                {
                    "type": "p",
                    "text": "You will hear the term QLoRA constantly. The Q is for quantised. The trick is to load the frozen base model in 4-bit precision — squashing each weight from a chunky 16-bit number down to a tiny 4-bit one — which dramatically shrinks how much GPU memory the base takes up. The LoRA adapter is still trained in higher precision on top. Because the base is frozen anyway, squashing it costs you very little quality, but it is the difference between needing a 48GB data-centre card and fitting the whole job on a single consumer GPU."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "QLoRA is the reason regular people can fine-tune 7B and 8B models at home. Rough guide: with 4-bit QLoRA you can train an 8B model on about 8–12GB of VRAM, a 13B on roughly 16GB, and a 70B on a single 48GB card. Without it, multiply those numbers by four or more."
                }
            ]
        },
        {
            "id": "46",
            "slug": "what-you-need-to-train-a-lora",
            "title": "46. What You Need to Train a LoRA",
            "blocks": [
                {
                    "type": "p",
                    "text": "Training a LoRA needs three things: examples to learn from, a tool to run the training, and a computer with a decent GPU. The examples matter more than everything else combined. A brilliant tool on a powerful GPU with a bad dataset gives you a bad model. A simple tool on a modest GPU with a great dataset gives you something genuinely useful. So we start with the data."
                },
                {
                    "type": "h2",
                    "text": "The dataset is ninety percent of the job"
                },
                {
                    "type": "p",
                    "text": "A fine-tuning dataset is a list of examples showing the model the input it will receive and the output you want back. The model reads these examples over and over and adjusts the adapter until its outputs match yours. The golden rule: the model becomes the average of its examples. If your examples are inconsistent, sloppy, or off-tone, the model learns to be inconsistent, sloppy, and off-tone. Garbage in, garbage out — but permanently this time."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Beginners obsess over rank and learning rate and ignore the data. It is backwards. Fifty hand-checked, high-quality examples beat five thousand scraped, messy ones. Curate ruthlessly. Every bad example is actively teaching the model to be worse."
                },
                {
                    "type": "h2",
                    "text": "What the data looks like"
                },
                {
                    "type": "p",
                    "text": "Most instruction-tuning datasets are stored as JSONL — one JSON object per line, each object being a single training example. The two common shapes are a simple instruction/output pair, or a full chat conversation with roles. Here is the instruction style:"
                },
                {
                    "type": "code",
                    "language": "json",
                    "code": "{\"instruction\": \"Write a conventional commit message for adding a dark mode toggle\", \"output\": \"feat(ui): add dark mode toggle with system preference detection\"}\n{\"instruction\": \"Write a conventional commit message for fixing a null check in the auth guard\", \"output\": \"fix(auth): guard against null session in route middleware\"}\n{\"instruction\": \"Write a conventional commit message for bumping the Next.js version\", \"output\": \"chore(deps): upgrade next to 14.2.35\"}"
                },
                {
                    "type": "p",
                    "text": "And here is the chat style, which matches how modern instruct models actually expect their input — as a list of role-tagged messages:"
                },
                {
                    "type": "code",
                    "language": "json",
                    "code": "{\"messages\": [{\"role\": \"system\", \"content\": \"You write terse, senior-level code reviews.\"}, {\"role\": \"user\", \"content\": \"Review: function add(a,b){return a+b}\"}, {\"role\": \"assistant\", \"content\": \"No type annotations and no input validation. Add types and reject non-numbers, or document that callers guarantee numeric input.\"}]}"
                },
                {
                    "type": "h2",
                    "text": "How many examples do you need?"
                },
                {
                    "type": "ul",
                    "items": [
                        "Style or tone adaptation — you can see real results with 50 to 200 clean examples",
                        "A specific structured task (commit messages, classification, formatting) — 200 to 1,000 examples",
                        "A broader skill or domain behaviour — 1,000 to 10,000+ examples",
                        "Quality threshold — every single example should be one you would be happy to ship as the model's output, because that is literally what you are teaching it to produce"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The tools"
                },
                {
                    "type": "ul",
                    "items": [
                        "Unsloth — the easiest on-ramp. Heavily optimised, roughly 2x faster and far more memory-efficient than vanilla training, with ready-made notebooks. Best choice for your first LoRA on a consumer GPU.",
                        "Axolotl — config-file driven. You describe the whole training run in a YAML file. Popular for reproducible, serious runs once you know what you are doing.",
                        "Hugging Face PEFT + TRL — the underlying libraries. PEFT provides the LoRA machinery; TRL's SFTTrainer wraps the training loop. Maximum control, more boilerplate.",
                        "LLaMA-Factory — a friendly UI and CLI over many models and methods if you prefer dashboards to code."
                    ]
                },
                {
                    "type": "h2",
                    "text": "The hardware"
                },
                {
                    "type": "p",
                    "text": "Thanks to QLoRA you do not need exotic hardware. A single NVIDIA GPU with 8GB of VRAM can fine-tune a small model; 12 to 24GB is comfortable for 7B to 13B models. If you do not own a suitable GPU, rent one by the hour — services like Google Colab, RunPod, Vast.ai, or Lambda give you a capable card for a dollar or two an hour, which is often cheaper than the electricity of running your own overnight. Apple Silicon can train small adapters via MLX, though the NVIDIA ecosystem is still the smoothest road."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Do not buy a GPU for your first LoRA. Rent one on RunPod or Colab for a few dollars, prove the whole pipeline works end to end, and only invest in hardware once you know you will be training regularly."
                }
            ]
        },
        {
            "id": "47",
            "slug": "training-your-first-lora",
            "title": "47. Training Your First LoRA (Step by Step)",
            "blocks": [
                {
                    "type": "p",
                    "text": "This is the whole pipeline start to finish using Unsloth, because it is the gentlest path and runs on a free Colab GPU. Read it once to see the shape of the thing, then run it. The five stages are always the same no matter which tool you use: load the base model, attach the adapter, load your data, train, and save."
                },
                {
                    "type": "h2",
                    "text": "Stage 1 — load the base model in 4-bit"
                },
                {
                    "type": "p",
                    "text": "You start from an existing instruct model. Loading it in 4-bit (the QLoRA trick from the last lesson) is what keeps it inside a small GPU's memory."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "from unsloth import FastLanguageModel\nimport torch\n\nmodel, tokenizer = FastLanguageModel.from_pretrained(\n    model_name = \"unsloth/llama-3-8b-Instruct-bnb-4bit\",\n    max_seq_length = 2048,   # how long each training example can be\n    load_in_4bit = True,     # the QLoRA memory saver\n)"
                },
                {
                    "type": "h2",
                    "text": "Stage 2 — attach the LoRA adapter"
                },
                {
                    "type": "p",
                    "text": "Here is where the dials from lesson 45 show up. You wrap the frozen base model with trainable adapters on the attention and feed-forward projections."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "model = FastLanguageModel.get_peft_model(\n    model,\n    r = 16,                  # rank — the bottleneck width\n    lora_alpha = 16,         # scaling — how loud the adapter is\n    lora_dropout = 0,        # regularisation; 0 is fine to start\n    target_modules = [\n        \"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\",      # attention\n        \"gate_proj\", \"up_proj\", \"down_proj\",          # feed-forward\n    ],\n    bias = \"none\",\n    use_gradient_checkpointing = \"unsloth\",  # saves more memory\n)"
                },
                {
                    "type": "h2",
                    "text": "Stage 3 — load and format your data"
                },
                {
                    "type": "p",
                    "text": "Point it at your JSONL file and apply the model's chat template so every example is formatted exactly the way the model expects at inference time. Matching the template matters — train in a different format than you will run, and quality drops."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "from datasets import load_dataset\n\ndataset = load_dataset(\"json\", data_files=\"my_data.jsonl\", split=\"train\")\n\ndef format_chat(example):\n    return { \"text\": tokenizer.apply_chat_template(\n        example[\"messages\"], tokenize=False, add_generation_prompt=False\n    )}\n\ndataset = dataset.map(format_chat)"
                },
                {
                    "type": "h2",
                    "text": "Stage 4 — train"
                },
                {
                    "type": "p",
                    "text": "TRL's SFTTrainer runs the loop. The hyperparameters below are sensible starting points; the comments explain what each one actually controls so you can reason about them instead of cargo-culting."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "from trl import SFTTrainer\nfrom transformers import TrainingArguments\n\ntrainer = SFTTrainer(\n    model = model,\n    tokenizer = tokenizer,\n    train_dataset = dataset,\n    dataset_text_field = \"text\",\n    max_seq_length = 2048,\n    args = TrainingArguments(\n        per_device_train_batch_size = 2,    # examples per step (raise if VRAM allows)\n        gradient_accumulation_steps = 4,    # fake a bigger batch without more memory\n        warmup_steps = 5,\n        num_train_epochs = 3,               # how many passes over the dataset\n        learning_rate = 2e-4,               # how big each adjustment is\n        logging_steps = 1,\n        optim = \"adamw_8bit\",\n        output_dir = \"outputs\",\n    ),\n)\n\ntrainer.train()"
                },
                {
                    "type": "h2",
                    "text": "The hyperparameters that actually move the needle"
                },
                {
                    "type": "ul",
                    "items": [
                        "Epochs — how many times the model sees the whole dataset. Too few and it does not learn the pattern; too many and it memorises the data and overfits. 1 to 3 is the normal range. Watch the loss.",
                        "Learning rate — the step size of each adjustment. 1e-4 to 2e-4 is typical for LoRA. Too high and training destabilises; too low and nothing happens.",
                        "Batch size and gradient accumulation — together these set how many examples inform each update. Effective batch size is batch_size times accumulation_steps. Bigger is steadier but needs more memory; accumulation fakes a big batch on a small GPU.",
                        "Watch the training loss — it should fall and then flatten. If it keeps dropping toward zero while real-world output gets worse, you are overfitting. Stop earlier or add more varied data."
                    ]
                },
                {
                    "type": "h2",
                    "text": "Stage 5 — save the adapter"
                },
                {
                    "type": "p",
                    "text": "When training finishes you save just the small adapter — not the whole model. This is the file you will ship, share, or load onto the base model later."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "# Save only the LoRA adapter (small — often under 200MB)\nmodel.save_pretrained(\"my-lora-adapter\")\ntokenizer.save_pretrained(\"my-lora-adapter\")\n\n# Quick sanity test before you celebrate\nFastLanguageModel.for_inference(model)\ninputs = tokenizer.apply_chat_template(\n    [{\"role\": \"user\", \"content\": \"Write a commit message for adding rate limiting\"}],\n    return_tensors = \"pt\", add_generation_prompt = True,\n).to(\"cuda\")\nprint(tokenizer.decode(model.generate(inputs, max_new_tokens=64)[0]))"
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "That is a complete LoRA. Load base in 4-bit, attach adapter, format data, train for a few epochs, save the adapter. Everything else in fine-tuning is refinement on top of these five stages. Run it once end to end on a tiny dataset just to feel the loop — then scale up the data."
                }
            ]
        },
        {
            "id": "48",
            "slug": "using-your-lora-with-local-agents",
            "title": "48. Using Your LoRA With Local Agents",
            "blocks": [
                {
                    "type": "p",
                    "text": "You trained an adapter. Now you want your local agent — the Ollama setup from the Local AI lessons — to actually use it. This is the step most tutorials skip, and it trips people up because the training world and the running world speak different file formats. The training world produces a PyTorch adapter. The local-agent world (Ollama, llama.cpp) wants GGUF. Bridging that gap is the whole job here, and there are two clean paths."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Reality check on Ollama: it does not load a raw Hugging Face / PyTorch LoRA folder. You must convert to GGUF first. Skip this and you will get cryptic errors and assume your training failed when it was actually fine."
                },
                {
                    "type": "h2",
                    "text": "Path A — merge the adapter into the base (simplest)"
                },
                {
                    "type": "p",
                    "text": "The most reliable path is to permanently fuse the adapter back into the base model's weights, producing one standard model that already has your training baked in. After merging, the LoRA concept disappears — to Ollama it is just a normal model. Unsloth can export this directly to GGUF in one call, which is the shortcut most people should take."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "# Merge the adapter into the base and export straight to GGUF (quantised)\nmodel.save_pretrained_gguf(\n    \"my-merged-model\",\n    tokenizer,\n    quantization_method = \"q4_k_m\",   # 4-bit — good size/quality balance\n)\n# Produces a single .gguf file ready for Ollama"
                },
                {
                    "type": "p",
                    "text": "Then you write a tiny Modelfile — Ollama's equivalent of a Dockerfile — pointing at that GGUF, and import it. Now it is a first-class local model you can chat with or wire into your agent."
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "# Modelfile\nFROM ./my-merged-model/unsloth.Q4_K_M.gguf\n\n# Optional: bake in a system prompt and sampling settings\nSYSTEM \"\"\"You write terse, senior-level code reviews and conventional commits.\"\"\"\nPARAMETER temperature 0.4\n\n# Then in your terminal:\n# ollama create my-agent -f Modelfile\n# ollama run my-agent"
                },
                {
                    "type": "h2",
                    "text": "Path B — keep the adapter separate (ADAPTER directive)"
                },
                {
                    "type": "p",
                    "text": "If you want to keep the adapter as its own small file — so you can swap several adapters onto the same base without storing a full merged model for each — convert just the adapter to GGUF and apply it with the ADAPTER instruction in the Modelfile. The base in FROM must be the exact model the adapter was trained on, or the results will be garbage."
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "# Modelfile using a separate adapter\nFROM llama3:8b-instruct\nADAPTER ./my-lora-adapter.gguf\n\n# ollama create my-agent-b -f Modelfile\n# ollama run my-agent-b"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Use Path A (merge) when you have one specialised model and want zero fuss. Use Path B (separate adapter) when you keep one base model and snap different skills onto it — a review adapter, a docs-writing adapter, a client-voice adapter — without duplicating gigabytes each time."
                },
                {
                    "type": "h2",
                    "text": "Wiring it into your agent harness"
                },
                {
                    "type": "p",
                    "text": "Once the model exists in Ollama, nothing else in your stack has to change. The playground chat in this project, your harness loop, any tool that talks to the Ollama API — they all just reference the new model name. Your fine-tuned, private, specialised model is now a drop-in replacement for the generic one, running entirely on your machine with no API cost and no data leaving your network."
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "# Point any Ollama API call at your new model\ncurl http://localhost:11434/api/chat -d '{\n  \"model\": \"my-agent\",\n  \"messages\": [{\"role\": \"user\", \"content\": \"Review this PR diff...\"}]\n}'"
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "This is the full local loop closing: train a LoRA on your own examples, merge and convert to GGUF, import into Ollama, and point your agent harness at it. A specialised model that sounds like you and knows your conventions — entirely offline, entirely yours."
                }
            ]
        },
        {
            "id": "49",
            "slug": "lora-pitfalls-and-best-practices",
            "title": "49. LoRA Pitfalls & Best Practices",
            "blocks": [
                {
                    "type": "p",
                    "text": "Most failed LoRAs do not fail during training — the loss goes down, everything looks great, and then the model is somehow worse than before you started. That is because the dangerous mistakes are quiet. Here is the field guide to the traps, in roughly the order they bite people, plus the habits that avoid them."
                },
                {
                    "type": "h2",
                    "text": "Pitfall 1 — overfitting"
                },
                {
                    "type": "p",
                    "text": "Overfitting is when the model memorises your training examples instead of learning the pattern behind them. The tell is a model that reproduces training answers almost word for word but falls apart on anything slightly new. It usually comes from too many epochs, too small a dataset, or too high a rank. The fix is more and more varied data, fewer epochs, and stopping when the loss flattens rather than chasing it toward zero."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "A loss curve that keeps dropping is not always good news. Past a certain point the model is memorising, not learning. Always keep a handful of examples OUT of training and test against them — if it nails the training set but flubs the held-out ones, you overfit."
                },
                {
                    "type": "h2",
                    "text": "Pitfall 2 — catastrophic forgetting"
                },
                {
                    "type": "p",
                    "text": "Push the adapter too hard — high alpha, high learning rate, too many epochs on a narrow dataset — and the model gets so good at your one task that it forgets how to do everything else. Your commit-message LoRA can suddenly no longer hold a normal conversation. LoRA is more resistant to this than full fine-tuning because the base stays frozen, but you can still bury the base under an overpowering adapter. Keep the adapter's influence moderate and include a little general-purpose data in the mix if breadth matters."
                },
                {
                    "type": "h2",
                    "text": "Pitfall 3 — training on facts"
                },
                {
                    "type": "p",
                    "text": "Worth repeating because it is the most common waste of a training run: fine-tuning teaches behaviour and style, not reliable facts. If you need the model to know your current pricing, your API schema, or today's inventory, that belongs in retrieval (RAG) or the prompt, not in a LoRA. A LoRA trained on facts will learn to sound confident about them while quietly getting the details wrong."
                },
                {
                    "type": "h2",
                    "text": "Pitfall 4 — format mismatch"
                },
                {
                    "type": "p",
                    "text": "If you train with one chat template and run inference with a different one, quality silently tanks. The model learned to respond to a specific structure of special tokens and role markers; change that structure at runtime and you are speaking a slightly different language than the one it was taught. Always apply the model's own chat template during training, and make sure your serving setup uses the same one."
                },
                {
                    "type": "h2",
                    "text": "Pitfall 5 — inconsistent data"
                },
                {
                    "type": "p",
                    "text": "The model becomes the average of its examples. If half your examples are formal and half are casual, you get an unpredictable mix of both. If some outputs are excellent and some are mediocre, you taught it mediocrity is acceptable. Consistency in your dataset is more important than volume. One clear voice across 200 examples beats five conflicting voices across 2,000."
                },
                {
                    "type": "h2",
                    "text": "The pre-flight checklist"
                },
                {
                    "type": "ul",
                    "items": [
                        "Did I try a better prompt or retrieval first, and confirm they were not enough?",
                        "Is every training example one I would be proud to ship as the model's output?",
                        "Is my dataset consistent in tone, format, and quality?",
                        "Did I hold out a test set the model never trains on?",
                        "Am I using the model's correct chat template, the same in training and inference?",
                        "Did I start with rank 16, alpha around 16–32, learning rate ~2e-4, and 1–3 epochs before tuning anything?",
                        "Did I test the held-out set and some totally fresh prompts before trusting it?",
                        "For anything fact-based, did I route it through retrieval instead of baking it into the adapter?"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The whole discipline in one line: spend eighty percent of your effort on the dataset, start with boring default hyperparameters, always keep a held-out test set, and never use a LoRA to teach facts. Do that and your first real LoRA will actually be useful — not just a science project."
                }
            ]
        }
    ]
};