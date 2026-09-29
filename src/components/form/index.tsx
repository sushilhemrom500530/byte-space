export default function Form() {
    return (
        <div>
            <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-[280px] h-11 sm:h-12 px-5 rounded-full border border-[#D5D5D6] text-sm text-[#242528] placeholder-[#9CA3AF] focus:outline-none focus:border-primary transition-colors"
            />
        </div>
    );
}