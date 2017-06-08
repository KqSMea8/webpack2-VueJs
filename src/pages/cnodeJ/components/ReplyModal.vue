<template>
	<transition name = "fade">
		<div class = "modal postModal" v-show = "show">
			<div class = "modal-header">
				<button type = "button" class = "close" @click.stop = "close">
					<span aria-hidden = "true">×</span>
				</button>
				<h4 class = "modal-title">回复</h4>
			</div>
			<div class = "modal-body">
				<div class = "form-group">
					<label for = "reply" aria-hidden = "true"></label>
					<textarea name = "post" id = "reply"></textarea>
				</div>
			</div>
			<div class = "modal-footer">
				<button class = "btn btn-default" @click = "reply($event)" :disabled = "state === 'posting'">
					{{ state === 'posting' ? '回复中...' : '回复' }}
				</button>
			</div>
		</div>
	</transition>
</template>

<script>
	import createSimplemde from '../js/createSimplemde';
	export default {
		data() {
			return {
				mde  : null,
				state: 'ready' // 当前的状态 ready || posting
			};
		},
		props: {
			show: {
				type   : Boolean,
				default: false
			}
		},
		watch: {
			show(newVal) {
				if (newVal && !this.mde) {
					this.mde = createSimplemde({
						element: document.getElementById('reply')
					});
				}
			}
		},
		methods: {
			close() {
				this.$emit('close', 'reply', () => {
					this.state = 'ready';
					this.mde && this.mde.value('');
				});
			},
		    // 从ActionButton.vue的setReply函数中this.$refs.replyModal.setReply(content)调用
			setReply(content) {
				this.state = 'ready';
				if (!this.mde) {
					this.mde = createSimplemde({
						element: document.getElementById('reply')
					});
				}
				setTimeout(() => {
					this.mde.value(content);
				});
			},
			reply() {
				if (this.state === 'posting') return;
				const content = this.mde.value();
				if (!content) {
					this.$message.error('内容不能为空');
					return;
				}
				this.state = 'posting';
				this.$emit('reply', content, () => {
					this.state = 'ready';
				});
			}
		}
	};
</script>

<style rel = "stylesheet/scss" lang = "scss" scoped></style>
